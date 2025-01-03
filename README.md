# Side Panel

A customizable side panel component that can be positioned on either side of the screen with configurable animations and styling. Perfect for navigation menus, shopping carts, filters, or any slide-out content.

## Features

- 🎯 Customizable positioning (left/right side)
- 🎨 Fully styleable with CSS
- 📱 Responsive and mobile-friendly
- 🔄 Smooth animations
- 🎛️ Configurable width and colors
- 🚀 Lightweight and zero dependencies
- 🔒 Scroll lock when panel is open

## Installation

```bash
npm install @caelumtanvir/side-panel
```
## Basic Usage
```bash
import SidePanel from '@caelumtanvir/side-panel';

// Initialize the panel
const panel = new SidePanel({
  side: 'left',
  width: '300px',
  content: '<h2>My Panel Content</h2><p>Hello World!</p>'
});
```

## Configuration Options
```bash
const panel = new SidePanel({
  // Required options with default values
  side: 'left',                    // Panel position: 'left' or 'right'
  width: '300px',                  // Panel width
  backgroundColor: '#ffffff',      // Panel background color
  buttonColor: '#333333',         // Toggle button background color
  buttonTextColor: '#ffffff',     // Toggle button icon color
  buttonHoverColor: '#555555',    // Toggle button hover color
  content: '',                    // HTML content for the panel
});
```
## Styling
The component comes with default styling but can be customized using CSS classes:
```bash
/* Main panel container */
.side-panel {
  /* Your custom styles */
}

/* Panel content wrapper */
.panel-content {
  /* Your custom styles */
}

/* Toggle button */
.toggle-button {
  /* Your custom styles */
}

/* Active state classes */
.side-panel.open {
  /* Styles when panel is open */
}

.toggle-button.active {
  /* Styles when button is active */
}
```
## Advanced Examples
Dynamic Content Update
```bash
const panel = new SidePanel({
  side: 'right',
  content: '<div id="dynamic-content">Loading...</div>'
});

// Later update the content
document.getElementById('dynamic-content').innerHTML = 'Updated content!';
```
Custom Styling Example
```bash
const panel = new SidePanel({
  side: 'left',
  width: '400px',
  backgroundColor: '#f5f5f5',
  buttonColor: '#007bff',
  content: `
    <div style="padding: 20px;">
      <h2>Navigation</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  `
});
```
Shopping Cart Example
```bash
const panel = new SidePanel({
  side: 'right',
  width: '350px',
  content: `
    <div class="cart-panel">
      <h2>Shopping Cart</h2>
      <div id="cart-items">
        <!-- Cart items will be inserted here -->
      </div>
      <div class="cart-total">
        Total: $0.00
      </div>
      <button class="checkout-button">Checkout</button>
    </div>
  `
});
```
## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11 (with appropriate babel configuration)
## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
## License
This project is licensed under the MIT License - see the LICENSE file for details.
## Author
Tanvir Alam
## Issues and Support
If you find any bugs or have feature requests, please create an issue on the GitHub repository.