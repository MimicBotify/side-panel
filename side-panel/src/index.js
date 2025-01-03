import './index.css';

export default class SidePanel {
  constructor(options = {}) {
    this.options = {
      side: 'left',  // Can be 'left' or 'right'
      width: '300px',
      backgroundColor: '#ffffff',
      buttonColor: '#333333',
      buttonTextColor: '#ffffff',
      buttonHoverColor: '#555555',
      content: '', // New option for content
      buttons: [], // Array of button configurations
      ...options
    };
    this.isOpen = false;
    this.init();
  }

  init() {
    // Panel setup
    this.panel = document.createElement('div');
    this.panel.className = `side-panel ${this.options.side}`;
    this.panel.style.position = 'fixed';
    this.panel.style.top = '0';
    this.panel.style.bottom = '0'; // Ensure the panel takes full viewport height
    this.panel.style[this.options.side] = '0';
    this.panel.style.width = this.options.width;
    this.panel.style.backgroundColor = this.options.backgroundColor;
    this.panel.style.border = 'none';
    this.panel.style.boxSizing = 'border-box';
    this.panel.style.margin = '0'; // Ensure no margin
    this.panel.style.padding = '0'; // Ensure no padding
    this.panel.innerHTML = `<div class="panel-content">${this.options.content}</div>`;

    // Toggle button setup
    this.toggleButton = document.createElement('button');
    this.toggleButton.className = `toggle-button ${this.options.side}`;
    this.toggleButton.style.backgroundColor = this.options.buttonColor;
    this.toggleButton.style.position = 'fixed';
    this.toggleButton.style.top = '20px';
    this.toggleButton.style[this.options.side] = '20px';
    this.toggleButton.style.zIndex = '9999';

    // Create burger lines
    for (let i = 0; i < 3; i++) {
      const line = document.createElement('span');
      line.className = 'burger-line';
      this.toggleButton.appendChild(line);
    }

    this.toggleButton.addEventListener('click', () => this.toggle());

    // Prevent scroll propagation
    this.panel.addEventListener('wheel', (e) => {
      e.stopPropagation();
    });

    document.body.appendChild(this.panel);
    document.body.appendChild(this.toggleButton);
  }

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.panel.classList.add('open');
      this.toggleButton.style[this.options.side] = '300px';
      // Store current scroll position
      this.scrollPos = window.pageYOffset;
      // Disable main scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollPos}px`;
      document.body.style.width = '100%';
    } else {
      this.panel.classList.remove('open');
      this.toggleButton.style[this.options.side] = '20px';
      // Re-enable main scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, this.scrollPos);
    }
    this.toggleButton.classList.toggle('active');
  }
}
