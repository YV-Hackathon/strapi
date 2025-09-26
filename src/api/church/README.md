# Church API

This API manages churches and religious organizations.

## Content Type Schema

The `church` content type includes the following attributes:

### Basic Information
- `name` (string, required): Church name
- `denomination` (string, required): Church denomination (e.g., "Baptist", "Methodist", "Catholic")
- `description` (text): Church description
- `address` (json): Church address information
- `phone` (string): Contact phone number
- `email` (email): Contact email
- `website` (string): Church website URL
- `logo` (media): Church logo image

### Church Details
- `foundedYear` (integer): Year the church was founded
- `membershipCount` (integer): Number of members
- `serviceTimes` (json): Service times and schedule
- `socialMedia` (json): Social media links object
- `isActive` (boolean): Whether the church is currently active
- `sortOrder` (integer): Display order for listings

### Relationships
- `speakers` (relation): One-to-many relationship with speakers

## API Endpoints

### Standard CRUD Operations
- `GET /api/churches` - Get all churches
- `GET /api/churches/:id` - Get specific church
- `POST /api/churches` - Create new church
- `PUT /api/churches/:id` - Update church
- `DELETE /api/churches/:id` - Delete church

### Custom Endpoints
- `GET /api/churches/active` - Get only active churches
- `GET /api/churches/by-denomination?denomination=Baptist` - Get churches by denomination

## Usage Examples

### Get all active churches
```javascript
const response = await fetch('/api/churches/active');
const churches = await response.json();
```

### Get churches by denomination
```javascript
const response = await fetch('/api/churches/by-denomination?denomination=Baptist');
const baptistChurches = await response.json();
```

### Create a new church
```javascript
const newChurch = {
  name: "First Baptist Church",
  denomination: "Baptist",
  description: "A welcoming community of faith...",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345"
  },
  phone: "(555) 123-4567",
  email: "info@firstbaptist.com",
  website: "https://firstbaptist.com",
  foundedYear: 1950,
  membershipCount: 250,
  serviceTimes: {
    sunday: ["9:00 AM", "11:00 AM"],
    wednesday: ["7:00 PM"]
  },
  isActive: true
};

const response = await fetch('/api/churches', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ data: newChurch })
});
```

### Get church with speakers
```javascript
const response = await fetch('/api/churches/1?populate=speakers');
const churchWithSpeakers = await response.json();
```

## Service Methods

The church service includes custom methods:
- `findActiveChurches()` - Find all active churches
- `findByDenomination(denomination)` - Find churches by denomination
- `getChurchesWithSpeakers()` - Find churches with their speakers populated
