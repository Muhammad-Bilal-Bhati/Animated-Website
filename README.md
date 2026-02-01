# Animated Landing Page 🎨

A modern, responsive landing page featuring smooth text animations and interactive visual effects built with GSAP and Shery.js.

![Website Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **Animated Text Carousel** - Auto-cycling text animations with smooth transitions
- **Interactive Background** - Shery.js powered image effects with mouse interactions
- **Fully Responsive** - Optimized layouts for desktop, tablet, and mobile devices
- **Smooth Animations** - GSAP-powered transitions with Expo easing
- **Clean UI** - Minimalist design with focus on content

## 🚀 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and media queries
- **JavaScript (ES6+)** - Dynamic animations and interactions
- **GSAP 3.12.2** - Professional-grade animation library
- **Shery.js** - Creative image effects and distortions
- **Three.js** - 3D rendering support for Shery effects

## 📋 Project Structure

```
Website/
├── index.html          # Main HTML file
├── style.css           # Styles and responsive design
├── script.js           # Animation logic and interactions
├── raybanlogo.png      # Logo image
├── IMG_7564.JPG        # Background images
├── IMG_7565.JPG
├── IMG_7566.JPG
├── IMG_7567.JPG
├── IMG_7568.JPG
└── README.md
```

## 🎯 Key Components

### Text Animation System
- Three synchronized text carousels with different words
- Automatic cycling every 2 seconds
- Smooth enter/exit animations using GSAP
- Independent tracking for each text element

### Responsive Design
- **Desktop (1600px+)**: Full layout with hero text and side content
- **Tablet (768px-1024px)**: Adjusted spacing and proportions
- **Mobile (<768px)**: Column layout, hidden side content
- **Small Mobile (<480px)**: Optimized for small screens

### Navigation
- Logo and product links on the left
- Additional links on the right
- Touch-optimized for mobile devices

## 💻 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Website
   ```

2. **Open in browser**
   - Simply open `index.html` in any modern web browser
   - No build process or dependencies required
   - All libraries loaded via CDN

3. **Customize**
   - Edit text content in `index.html`
   - Modify styles in `style.css`
   - Adjust animations in `script.js`

## 🎨 Customization

### Changing Text Content
Edit the `.elements` sections in `index.html`:
```html
<div class="elements">
    <h1>Your Text</h1>
    <h1>Second Text</h1>
    <!-- Add more variations -->
</div>
```

### Adjusting Animation Speed
Modify the interval in `script.js`:
```javascript
setInterval(animateHeadings, 2000) // Change 2000 (2 seconds)
```

### Styling Colors
Update CSS variables in `style.css`:
```css
#hero-left h1{
    color: #fff; /* Change text color */
}
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

- Shery.js effects may have performance impact on low-end devices
- Some animations may be less smooth on older mobile devices

## 📝 License

This project is open source and available for personal and commercial use.

## 👤 Author

Muhammad Bilal Bhati

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) - Animation library
- [Shery.js](https://sheryjs.com/) - Image effects
- [Three.js](https://threejs.org/) - 3D graphics

---

Made with ❤️ and lots of animations
