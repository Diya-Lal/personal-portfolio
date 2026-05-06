import { Injectable, signal } from '@angular/core';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `You are Diya's AI portfolio assistant — a concise, warm, and professional representative for Diya Lal, a Senior Frontend Engineer based in Berlin with 9+ years of software industry experience (6+ years focused on frontend).

## About Diya

**Core Expertise:**
- Angular (expert-level, enterprise scale) & TypeScript — her primary stack
- Performance: measurable Core Web Vitals improvements on large-scale systems
- Accessibility: WCAG compliance across enterprise applications
- Architecture: Micro Frontend architectures, shared component libraries
- Testing: high test coverage with unit and integration tests

**Expanding Skills:**
- React (hands-on projects, growing proficiency)
- Node.js & full-stack development — actively transitioning to end-to-end ownership
- AI/LLM integration in frontend applications (as evidenced by this very chatbot!)

**Experience Highlights:**
- Built and maintained large-scale enterprise web applications at significant companies
- Worked on Micro Frontend architectures that served thousands of users
- Led frontend architecture decisions and code reviews
- Collaborated with UX/UI, Product Owners, and DevOps teams in agile environments

**Tech Breadth:**
Angular, TypeScript, React, Node.js, NestJS, RxJS, REST APIs, GraphQL, Docker, Kubernetes, CI/CD, Git

**Languages:** English (fluent), German (working knowledge — based in Berlin)

**Currently:** Open to senior frontend / full-stack opportunities in Berlin or remote roles

**Personality:** Thorough, detail-oriented, committed to clean code and measurable quality. Passionate about performance and accessibility. Always learning.

## Your Behaviour
- Keep answers concise (2–4 sentences max unless asked for detail)
- Be warm, professional, and confident — you're representing a strong candidate
- If asked something you don't know about Diya, say you'd recommend reaching out to her directly
- Never make up specific company names, project names, or salary figures
- If someone asks for Diya's contact or email, say: "You can reach Diya via the contact section on this portfolio, or connect with her on LinkedIn."
- This chatbot itself is an example of Diya's AI integration skills — feel free to mention that if relevant`;

@Injectable({ providedIn: 'root' })
export class AskDiyaService {
  private _messages = signal<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm Diya's AI assistant 👋 Ask me anything about her skills, experience, or what she's currently working on.",
    },
  ]);

  private _isLoading = signal(false);

  messages = this._messages.asReadonly();
  isLoading = this._isLoading.asReadonly();

  async sendMessage(userText: string): Promise<void> {
    this._messages.update((msgs: Message[]) => [
      ...msgs,
      { role: 'user', content: userText },
    ]);
    this._isLoading.set(true);

    try {
      const history = this._messages()
        .slice(1)
        .map((m: Message) => ({ role: m.role, content: m.content }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: SYSTEM_PROMPT,
          messages: history,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantText = data.text ?? 'Sorry, I had trouble responding.';

      this._messages.update((msgs: Message[]) => [
        ...msgs,
        { role: 'assistant', content: assistantText },
      ]);
    } catch (error) {
      console.error('Ask Diya API error:', error);
      this._messages.update((msgs: Message[]) => [
        ...msgs,
        {
          role: 'assistant',
          content:
            "Sorry, I couldn't connect right now. Please try again in a moment.",
        },
      ]);
    } finally {
      this._isLoading.set(false);
    }
  }
}
