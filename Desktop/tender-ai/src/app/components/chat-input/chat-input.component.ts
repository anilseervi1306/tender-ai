import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {
  @ViewChild('inputField') inputField!: ElementRef;
  @Output() submitQuery = new EventEmitter<string>();
  suggestions = ['Tender', 'Budget', 'Location'];
  showSuggestions = false;
  query = '';
  predefinedQueries = [
    'Show open tenders in construction',
    'Find IT tenders under $50,000',
    'Healthcare tenders in New York',
    'Renewable energy projects',
    'Government infrastructure tenders'
  ];

  handleInput(event: any) {
    if (event.data === '@') {
      this.showSuggestions = true;
    } else {
      this.showSuggestions = false;
    }
  }

  formatText() {
    // Replace [Tender] with highlighted version
    this.query = this.query.replace(
      /\[(.*?)\]/g, 
      '<span class="highlight-tag">$1</span>'
    );
  }

  selectSuggestion(suggestion: string) {
    const cursorPos = this.inputField.nativeElement.selectionStart;
    const textBefore = this.query.substring(0, cursorPos - 1);
    const textAfter = this.query.substring(cursorPos);
    
    this.query = `${textBefore}[${suggestion}]${textAfter}`;
    this.showSuggestions = false;
    this.inputField.nativeElement.focus();
  }

  handleSubmit() {
    if (this.query.trim()) {
      this.submitQuery.emit(this.query);
      this.query = '';
    }
  }
}