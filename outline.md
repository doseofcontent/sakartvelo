# Sakartvelo Skoniai, UAB - Project Outline

## File Structure

```
/mnt/okcomputer/output/
├── index.html              # Homepage with hero section and wine showcase
├── apie-mus.html           # About Us - Georgian wine history and culture
├── parduotuve.html         # Shop - Wine catalog with filtering and ordering
├── meniu.html              # Food Menu - Georgian cuisine with wine pairings
├── degustacija.html        # Wine Tasting - Booking system and packages
├── kontaktai.html          # Contacts - Location and contact information
├── main.js                 # Main JavaScript file with all interactions
└── resources/              # Media assets folder
    ├── hero-georgian-vineyard.jpg
    ├── qvevri-making.jpg
    ├── saperavi-bottles.jpg
    ├── khachapuri-traditional.jpg
    ├── georgian-feast.jpg
    ├── wine-tasting-setup.jpg
    └── [additional wine and food images]
```

## Page Breakdown

### 1. index.html - Homepage
**Purpose**: Create immediate impact and guide visitors to key areas
**Sections**:
- Navigation bar with Georgian-inspired styling
- Hero section with vineyard imagery and compelling tagline
- Featured wine showcase with interactive cards
- Three main CTA sections (Shop, Taste, Dine)
- Georgian wine heritage highlight
- Footer with contact information

**Interactive Elements**:
- Animated hero text with wine color gradients
- Hover effects on wine cards with 3D tilt
- Smooth scroll navigation
- Image carousel with Georgian vineyard photos

### 2. apie-mus.html - About Us
**Purpose**: Tell the story of Georgian wine culture and company mission
**Sections**:
- Company introduction and values
- 8,000-year Georgian wine history timeline
- Qvevri winemaking method explanation
- Georgian wine regions interactive map
- Traditional wine culture and customs
- Commitment to authenticity and quality

**Interactive Elements**:
- Interactive timeline with ECharts.js
- Clickable Georgian wine region map
- Qvevri making process animation
- Cultural story expandable sections

### 3. parduotuve.html - Wine Shop
**Purpose**: Showcase wine catalog with advanced filtering and ordering
**Sections**:
- Wine category navigation (Red, White, Amber, Qvevri)
- Advanced filtering sidebar (Region, Price, Sweetness)
- Wine grid with detailed cards
- Quick view modal for wine details
- Order inquiry form system
- Wine education and pairing suggestions

**Interactive Elements**:
- Multi-level filtering system
- Wine card hover effects with tasting notes
- Modal dialogs for wine details
- Shopping cart functionality (inquiry-based)
- Price range slider
- Region selector with map integration

### 4. meniu.html - Food Menu
**Purpose**: Present Georgian cuisine with wine pairing recommendations
**Sections**:
- Menu category tabs (Appetizers, Main, Desserts, Beverages)
- Dish cards with images and descriptions
- Wine pairing suggestions for each dish
- Allergen and dietary information
- Traditional Georgian dining customs
- Reservation integration

**Interactive Elements**:
- Tabbed menu navigation
- Dish image galleries
- Wine pairing modal with purchase links
- Dietary filter toggles
- Interactive Georgian dining guide

### 5. degustacija.html - Wine Tasting
**Purpose**: Promote wine tasting experiences with booking system
**Sections**:
- Tasting experience descriptions
- Package options (4-wine vs 8-wine tastings)
- Interactive booking calendar
- Group size and pricing calculator
- Georgian hospitality and traditions
- Customer testimonials and reviews

**Interactive Elements**:
- Calendar date picker with availability
- Package comparison cards
- Dynamic pricing calculator
- Booking form with validation
- Confirmation system simulation
- Tasting notes preview

### 6. kontaktai.html - Contacts
**Purpose**: Provide contact information and location details
**Sections**:
- Contact information display
- Interactive location map (Google Maps)
- Contact form with validation
- Business hours and availability
- Directions and parking information
- Social media links

**Interactive Elements**:
- Embedded Google Maps
- Contact form with real-time validation
- Click-to-call and email functionality
- Social media integration
- Newsletter signup

## Technical Implementation

### Core Libraries Integration
1. **Anime.js**: Page transitions, card animations, text effects
2. **ECharts.js**: Wine region data visualization, timeline graphics
3. **Splide.js**: Image carousels, wine showcase sliders
4. **p5.js**: Interactive Georgian wine map, background effects
5. **Pixi.js**: Wine-like fluid background effects
6. **Matter.js**: Playful wine drop physics
7. **Shader-park**: Warm gradient backgrounds

### JavaScript Functionality (main.js)
- Navigation menu interactions
- Form validation and submission
- Modal dialog management
- Image lazy loading and optimization
- Animation trigger management
- Mobile responsiveness handlers
- Local storage for user preferences
- Analytics and tracking integration

### Responsive Design Strategy
- Mobile-first approach with progressive enhancement
- Flexible grid system adapting to all screen sizes
- Touch-optimized interactions for mobile devices
- Performance optimization for slower connections
- Accessible design following WCAG guidelines

### Content Management
- Structured data for wine information
- SEO optimization for local search
- Multi-language support preparation
- Image optimization and compression
- Performance monitoring and optimization

## User Experience Flow

### Primary User Journeys
1. **Wine Discovery**: Homepage → Shop → Wine Details → Order
2. **Experience Booking**: Homepage → Wine Tasting → Booking → Confirmation
3. **Cultural Learning**: Homepage → About → Food Menu → Wine Pairing
4. **Direct Contact**: Any Page → Contact → Form Submission

### Conversion Goals
- Wine order inquiries through shop
- Wine tasting experience bookings
- Restaurant reservations
- Newsletter subscriptions
- Social media engagement

This comprehensive structure ensures a cohesive, culturally authentic, and highly functional website that serves both educational and commercial purposes while honoring Georgian wine tradition.