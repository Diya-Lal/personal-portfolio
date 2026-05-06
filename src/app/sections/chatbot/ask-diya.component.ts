import {
  Component,
  signal,
  computed,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AskDiyaService, Message } from './ask-diya.service';

@Component({
  selector: 'app-ask-diya',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ask-diya.component.html',
  styleUrls: ['./ask-diya.component.scss'],
})
export class AskDiyaComponent implements AfterViewChecked, OnInit {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  @ViewChild('inputRef') private inputRef!: ElementRef;

  isOpen = signal(false);
  userInput = signal('');
  hasUnread = signal(false);

  messages = this.diyaService.messages;
  isLoading = this.diyaService.isLoading;

  suggestedQuestions = [
    'What is Diya\'s core expertise?',
    'Tell me about her Angular experience',
    'Is she open to new opportunities?',
    'What projects has she worked on?',
  ];

  constructor(private diyaService: AskDiyaService) {}

  ngOnInit() {
    // Show unread dot after a short delay to draw attention
    setTimeout(() => this.hasUnread.set(true), 3000);
  }

  private lastMessageCount = 0;

  ngAfterViewChecked() {
    const current = this.messages().length;
    if (current !== this.lastMessageCount) {
      this.lastMessageCount = current;
      this.scrollToBottom();
    }
  }

  toggleChat() {
    this.isOpen.update((v) => !v);
    if (this.isOpen()) {
      this.hasUnread.set(false);
      setTimeout(() => this.inputRef?.nativeElement?.focus(), 100);
    }
  }

  async sendMessage(text?: string) {
    const message = text ?? this.userInput();
    if (!message.trim() || this.isLoading()) return;
    this.userInput.set('');
    await this.diyaService.sendMessage(message);
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private scrollToBottom() {
    try {
      if (this.messagesContainer) {
        const el = this.messagesContainer.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    } catch {}
  }

  trackByIndex(index: number) {
    return index;
  }
}
