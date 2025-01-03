# Side Panel

A customizable React side panel component that can be positioned on either side of the screen with configurable animations and styling.

## Installation

```bash
npm install side-panel
```
## Basic Usage
```bash
import { SidePanel } from 'side-panel';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidePanel
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      side="right"
    >
      <h2>Panel Content</h2>
      <p>Your content goes here...</p>
    </SidePanel>
  );
}
```
## Styling
The component comes with default styling but can be customized using CSS classes:
```bash
.side-panel {
  /* Panel container */
}

.panel-content {
  /* Content area */
}

.backdrop {
  /* Backdrop overlay */
}
```
## Advanced Examples
Custom Animation Duration
```bash
<SidePanel
  isOpen={isOpen}
  onClose={handleClose}
  duration={500}
  side="left"
>
  {/* Content */}
</SidePanel>
```
Without Backdrop
```bash
<SidePanel
  isOpen={isOpen}
  onClose={handleClose}
  backdrop={false}
>
  {/* Content */}
</SidePanel>
```
Custom Styling
```bash
<SidePanel
  isOpen={isOpen}
  onClose={handleClose}
  className="custom-panel"
  backdropClassName="custom-backdrop"
>
  {/* Content */}
</SidePanel>
```
## License
This project is licensed under the MIT License - see the LICENSE file for details.