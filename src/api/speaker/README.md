# Speakers API

This API manages speakers including pastors and other church speakers.

## Content Type Schema

The `speaker` content type includes the following attributes:

### Basic Information
- `name` (string, required): Speaker's full name
- `title` (string): Professional title or position
- `bio` (text): Speaker's biography
- `email` (email): Contact email
- `phone` (string): Contact phone number
- `profileImage` (media): Profile photo

### Church-Specific Attributes
- `church` (relation): Reference to the church the speaker belongs to
  - **Pastors**: Speakers with a church relationship
  - **Guest Speakers**: Speakers without a church relationship
- `yearsOfService` (integer): Years of service in ministry

### Advanced Attributes
- `socialMedia` (json): Social media links object
- `speakingTopics` (component): Array of speaking topics with name, description, and category
- `sortOrder` (integer): Display order for listings

## Topic Component Structure

Each speaking topic includes:
- `name` (string, required): The topic title
- `description` (text): Detailed description of the topic
- `category` (enumeration): Topic category from predefined list:
  - `preaching`, `teaching`, `counseling`, `leadership`
  - `evangelism`, `worship`, `youth`, `marriage`
  - `family`, `prayer`, `other`

## API Endpoints

### Standard CRUD Operations
- `GET /api/speakers` - Get all speakers
- `GET /api/speakers/:id` - Get specific speaker
- `POST /api/speakers` - Create new speaker
- `PUT /api/speakers/:id` - Update speaker
- `DELETE /api/speakers/:id` - Delete speaker

### Custom Endpoints
- `GET /api/speakers/pastors` - Get only pastors (speakers with church relationship)
- `GET /api/speakers/guest` - Get only guest speakers (speakers without church relationship)

## Usage Examples

### Get all pastors
```javascript
const response = await fetch('/api/speakers/pastors');
const pastors = await response.json();
```

### Get guest speakers
```javascript
const response = await fetch('/api/speakers/guest');
const guestSpeakers = await response.json();
```

### Create a pastor (with church)
```javascript
const newPastor = {
  name: "John Smith",
  title: "Senior Pastor",
  bio: "Pastor John has been serving for 15 years...",
  email: "john@church.com",
  church: 1, // Reference to church ID - this makes them a pastor
  yearsOfService: 15,
  speakingTopics: [
    {
      name: "The Power of Prayer",
      description: "Understanding the importance of prayer in daily life",
      category: "prayer"
    },
    {
      name: "Building Strong Marriages",
      description: "Biblical principles for healthy relationships",
      category: "marriage"
    },
    {
      name: "Leadership in Ministry",
      description: "Leading with integrity and purpose",
      category: "leadership"
    }
  ]
};
```

### Create a guest speaker (without church)
```javascript
const newGuestSpeaker = {
  name: "Jane Doe",
  title: "Evangelist",
  bio: "Jane travels and speaks at various churches...",
  email: "jane@example.com",
  // No church relationship - this makes them a guest speaker
  yearsOfService: 10,
  speakingTopics: [
    {
      name: "The Gospel Message",
      description: "Sharing the good news of Jesus Christ",
      category: "evangelism"
    },
    {
      name: "Youth and Faith",
      description: "Helping young people grow in their faith",
      category: "youth"
    },
    {
      name: "Overcoming Life's Challenges",
      description: "Finding strength through faith during difficult times",
      category: "counseling"
    }
  ]
};

const response = await fetch('/api/speakers', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ data: newSpeaker })
});
```

## Service Methods

The speaker service includes custom methods:
- `findPastors()` - Find all pastors (speakers with church relationship)
- `findGuestSpeakers()` - Find all guest speakers (speakers without church relationship)
- `findAllSpeakers()` - Find all speakers
