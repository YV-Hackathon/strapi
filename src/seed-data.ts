import type { Core } from '@strapi/strapi';

// Types for our data structures
interface Address {
  [key: string]: any;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface ServiceTimes {
  [key: string]: any;
  sunday?: string[];
  monday?: string[];
  tuesday?: string[];
  wednesday?: string[];
  thursday?: string[];
  friday?: string[];
  saturday?: string[];
  weekdays?: string[];
}

interface SocialMedia {
  [key: string]: any;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
}

interface SpeakingTopic {
  name: string;
  description: string;
  category: 'preaching' | 'teaching' | 'counseling' | 'leadership' | 'evangelism' | 'worship' | 'youth' | 'marriage' | 'family' | 'prayer' | 'other';
}

interface ChurchData {
  name: string;
  denomination: string;
  description: string;
  address: Address;
  phone: string;
  email: string;
  website: string;
  foundedYear: number;
  membershipCount: number;
  serviceTimes: ServiceTimes;
  socialMedia: SocialMedia;
  isActive: boolean;
  sortOrder: number;
}

interface SpeakerData {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  yearsOfService: number;
  socialMedia: SocialMedia;
  speakingTopics: SpeakingTopic[];
  sortOrder: number;
}

// Sample church data
export const churchesData: ChurchData[] = [
  {
    name: "Grace Community Church",
    denomination: "Baptist",
    description: "A welcoming community focused on faith, fellowship, and service to others. We believe in the power of God's love to transform lives.",
    address: {
      street: "123 Main Street",
      city: "Springfield",
      state: "IL",
      zipCode: "62701",
      country: "USA"
    },
    phone: "(217) 555-0123",
    email: "info@gracecommunity.org",
    website: "https://gracecommunity.org",
    foundedYear: 1985,
    membershipCount: 450,
    serviceTimes: {
      sunday: ["9:00 AM", "11:00 AM"],
      wednesday: ["7:00 PM"]
    },
    socialMedia: {
      facebook: "https://facebook.com/gracecommunity",
      instagram: "https://instagram.com/gracecommunity",
      twitter: "https://twitter.com/gracecommunity"
    },
    isActive: true,
    sortOrder: 1
  },
  {
    name: "First Presbyterian Church",
    denomination: "Presbyterian",
    description: "A historic church serving the community for over 150 years. We are committed to traditional worship and modern outreach.",
    address: {
      street: "456 Oak Avenue",
      city: "Springfield",
      state: "IL",
      zipCode: "62702",
      country: "USA"
    },
    phone: "(217) 555-0456",
    email: "office@firstpres.org",
    website: "https://firstpres.org",
    foundedYear: 1872,
    membershipCount: 320,
    serviceTimes: {
      sunday: ["8:30 AM", "10:30 AM"],
      wednesday: ["6:30 PM"]
    },
    socialMedia: {
      facebook: "https://facebook.com/firstpres",
      instagram: "https://instagram.com/firstpres"
    },
    isActive: true,
    sortOrder: 2
  },
  {
    name: "New Life Fellowship",
    denomination: "Non-denominational",
    description: "A contemporary church focused on authentic relationships and practical biblical teaching. All are welcome here.",
    address: {
      street: "789 Pine Street",
      city: "Springfield",
      state: "IL",
      zipCode: "62703",
      country: "USA"
    },
    phone: "(217) 555-0789",
    email: "hello@newlifefellowship.org",
    website: "https://newlifefellowship.org",
    foundedYear: 2005,
    membershipCount: 280,
    serviceTimes: {
      sunday: ["9:30 AM", "11:30 AM"],
      saturday: ["6:00 PM"]
    },
    socialMedia: {
      facebook: "https://facebook.com/newlifefellowship",
      instagram: "https://instagram.com/newlifefellowship",
      youtube: "https://youtube.com/newlifefellowship"
    },
    isActive: true,
    sortOrder: 3
  },
  {
    name: "St. Mary's Catholic Church",
    denomination: "Catholic",
    description: "A vibrant Catholic community dedicated to worship, service, and spiritual growth. We welcome all to join us in faith.",
    address: {
      street: "321 Church Street",
      city: "Springfield",
      state: "IL",
      zipCode: "62704",
      country: "USA"
    },
    phone: "(217) 555-0321",
    email: "office@stmarys.org",
    website: "https://stmarys.org",
    foundedYear: 1890,
    membershipCount: 650,
    serviceTimes: {
      sunday: ["7:00 AM", "9:00 AM", "11:00 AM", "5:00 PM"],
      saturday: ["4:00 PM", "6:00 PM"],
      weekdays: ["6:30 AM", "12:10 PM"]
    },
    socialMedia: {
      facebook: "https://facebook.com/stmarys",
      instagram: "https://instagram.com/stmarys"
    },
    isActive: true,
    sortOrder: 4
  },
  {
    name: "Hope United Methodist",
    denomination: "Methodist",
    description: "A warm and welcoming Methodist congregation committed to social justice, community service, and spiritual growth.",
    address: {
      street: "654 Elm Street",
      city: "Springfield",
      state: "IL",
      zipCode: "62705",
      country: "USA"
    },
    phone: "(217) 555-0654",
    email: "info@hopeumc.org",
    website: "https://hopeumc.org",
    foundedYear: 1965,
    membershipCount: 380,
    serviceTimes: {
      sunday: ["8:00 AM", "10:00 AM", "12:00 PM"],
      wednesday: ["7:00 PM"]
    },
    socialMedia: {
      facebook: "https://facebook.com/hopeumc",
      instagram: "https://instagram.com/hopeumc",
      twitter: "https://twitter.com/hopeumc"
    },
    isActive: true,
    sortOrder: 5
  },
  {
    name: "Calvary Baptist Church",
    denomination: "Baptist",
    description: "A traditional Baptist congregation with a strong emphasis on biblical teaching and community outreach. We welcome all to join our family of faith.",
    address: {
      street: "987 Washington Boulevard",
      city: "Springfield",
      state: "IL",
      zipCode: "62706",
      country: "USA"
    },
    phone: "(217) 555-0987",
    email: "info@calvarybaptist.org",
    website: "https://calvarybaptist.org",
    foundedYear: 1955,
    membershipCount: 520,
    serviceTimes: {
      sunday: ["8:00 AM", "10:30 AM", "6:00 PM"],
      wednesday: ["7:00 PM"],
      friday: ["7:00 PM"]
    },
    socialMedia: {
      facebook: "https://facebook.com/calvarybaptist",
      instagram: "https://instagram.com/calvarybaptist",
      youtube: "https://youtube.com/calvarybaptist"
    },
    isActive: true,
    sortOrder: 6
  },
  {
    name: "Trinity Lutheran Church",
    denomination: "Lutheran",
    description: "A welcoming Lutheran congregation following the teachings of Martin Luther. We celebrate grace, faith, and the Word of God in our daily lives.",
    address: {
      street: "456 Luther Drive",
      city: "Springfield",
      state: "IL",
      zipCode: "62707",
      country: "USA"
    },
    phone: "(217) 555-0456",
    email: "office@trinitylutheran.org",
    website: "https://trinitylutheran.org",
    foundedYear: 1923,
    membershipCount: 280,
    serviceTimes: {
      sunday: ["8:00 AM", "10:30 AM"],
      wednesday: ["6:30 PM"]
    },
    socialMedia: {
      facebook: "https://facebook.com/trinitylutheran",
      instagram: "https://instagram.com/trinitylutheran"
    },
    isActive: true,
    sortOrder: 7
  },
  {
    name: "Cornerstone Community Church",
    denomination: "Non-denominational",
    description: "A modern, vibrant church community focused on authentic worship, biblical teaching, and genuine relationships. Come as you are, leave transformed.",
    address: {
      street: "789 Faith Avenue",
      city: "Springfield",
      state: "IL",
      zipCode: "62708",
      country: "USA"
    },
    phone: "(217) 555-0789",
    email: "hello@cornerstonecommunity.org",
    website: "https://cornerstonecommunity.org",
    foundedYear: 2010,
    membershipCount: 320,
    serviceTimes: {
      sunday: ["9:00 AM", "11:00 AM", "5:00 PM"],
      saturday: ["6:00 PM"]
    },
    socialMedia: {
      facebook: "https://facebook.com/cornerstonecommunity",
      instagram: "https://instagram.com/cornerstonecommunity",
      twitter: "https://twitter.com/cornerstonecommunity",
      youtube: "https://youtube.com/cornerstonecommunity"
    },
    isActive: true,
    sortOrder: 8
  },
  {
    name: "St. Paul's Episcopal Church",
    denomination: "Episcopal",
    description: "A historic Episcopal parish committed to worship, service, and spiritual growth. We welcome all people regardless of background or belief.",
    address: {
      street: "321 Episcopal Way",
      city: "Springfield",
      state: "IL",
      zipCode: "62709",
      country: "USA"
    },
    phone: "(217) 555-0321",
    email: "office@stpaulsepiscopal.org",
    website: "https://stpaulsepiscopal.org",
    foundedYear: 1850,
    membershipCount: 180,
    serviceTimes: {
      sunday: ["8:00 AM", "10:00 AM", "12:00 PM"],
      wednesday: ["6:00 PM"],
      friday: ["12:00 PM"]
    },
    socialMedia: {
      facebook: "https://facebook.com/stpaulsepiscopal",
      instagram: "https://instagram.com/stpaulsepiscopal"
    },
    isActive: true,
    sortOrder: 9
  },
  {
    name: "Victory Assembly of God",
    denomination: "Assemblies of God",
    description: "A Pentecostal church focused on the power of the Holy Spirit, healing, and the gifts of God. We believe in the full gospel and the power of prayer.",
    address: {
      street: "654 Victory Lane",
      city: "Springfield",
      state: "IL",
      zipCode: "62710",
      country: "USA"
    },
    phone: "(217) 555-0654",
    email: "info@victoryassembly.org",
    website: "https://victoryassembly.org",
    foundedYear: 1978,
    membershipCount: 420,
    serviceTimes: {
      sunday: ["9:00 AM", "11:00 AM", "6:00 PM"],
      wednesday: ["7:00 PM"],
      friday: ["7:00 PM"]
    },
    socialMedia: {
      facebook: "https://facebook.com/victoryassembly",
      instagram: "https://instagram.com/victoryassembly",
      youtube: "https://youtube.com/victoryassembly"
    },
    isActive: true,
    sortOrder: 10
  },
  {
    name: "First Baptist Church Downtown",
    denomination: "Baptist",
    description: "A downtown Baptist church serving the urban community with traditional worship and contemporary outreach. We are committed to social justice and community service.",
    address: {
      street: "123 Downtown Plaza",
      city: "Springfield",
      state: "IL",
      zipCode: "62711",
      country: "USA"
    },
    phone: "(217) 555-0123",
    email: "info@firstbaptistdowntown.org",
    website: "https://firstbaptistdowntown.org",
    foundedYear: 1905,
    membershipCount: 350,
    serviceTimes: {
      sunday: ["8:30 AM", "11:00 AM"],
      wednesday: ["6:30 PM"]
    },
    socialMedia: {
      facebook: "https://facebook.com/firstbaptistdowntown",
      instagram: "https://instagram.com/firstbaptistdowntown",
      twitter: "https://twitter.com/firstbaptistdowntown"
    },
    isActive: true,
    sortOrder: 11
  },
  {
    name: "Grace Lutheran Church",
    denomination: "Lutheran",
    description: "A traditional Lutheran congregation with a contemporary heart. We believe in the power of God's grace and the importance of community in our faith journey.",
    address: {
      street: "789 Grace Street",
      city: "Springfield",
      state: "IL",
      zipCode: "62712",
      country: "USA"
    },
    phone: "(217) 555-0789",
    email: "office@gracelutheran.org",
    website: "https://gracelutheran.org",
    foundedYear: 1945,
    membershipCount: 240,
    serviceTimes: {
      sunday: ["9:00 AM", "11:00 AM"],
      wednesday: ["7:00 PM"]
    },
    socialMedia: {
      facebook: "https://facebook.com/gracelutheran",
      instagram: "https://instagram.com/gracelutheran"
    },
    isActive: true,
    sortOrder: 12
  }
];

// Sample speaker data
export const speakersData: SpeakerData[] = [
  {
    name: "Pastor John Smith",
    title: "Senior Pastor",
    bio: "Pastor John has been serving in ministry for over 20 years. He holds a Master of Divinity from Trinity Seminary and is passionate about biblical teaching and community outreach.",
    email: "john.smith@gracecommunity.org",
    phone: "(217) 555-0124",
    yearsOfService: 8,
    socialMedia: {
      facebook: "https://facebook.com/pastorjohnsmith",
      twitter: "https://twitter.com/pastorjohnsmith"
    },
    speakingTopics: [
      {
        name: "Faith and Doubt",
        description: "Exploring the relationship between faith and doubt in the Christian journey",
        category: "preaching"
      },
      {
        name: "Community Building",
        description: "Building authentic Christian community in the modern world",
        category: "leadership"
      },
      {
        name: "Prayer Life",
        description: "Developing a deeper and more meaningful prayer life",
        category: "prayer"
      }
    ],
    sortOrder: 1
  },
  {
    name: "Rev. Sarah Johnson",
    title: "Associate Pastor",
    bio: "Rev. Sarah brings a fresh perspective to ministry with her background in counseling and youth work. She has a heart for social justice and community service.",
    email: "sarah.johnson@gracecommunity.org",
    phone: "(217) 555-0125",
    yearsOfService: 5,
    socialMedia: {
      instagram: "https://instagram.com/revsarahjohnson",
      twitter: "https://twitter.com/revsarahjohnson"
    },
    speakingTopics: [
      {
        name: "Youth Ministry",
        description: "Engaging and ministering to the next generation",
        category: "youth"
      },
      {
        name: "Mental Health and Faith",
        description: "Addressing mental health issues from a Christian perspective",
        category: "counseling"
      },
      {
        name: "Social Justice",
        description: "Living out faith through social action and justice",
        category: "evangelism"
      }
    ],
    sortOrder: 2
  },
  {
    name: "Dr. Michael Chen",
    title: "Senior Pastor",
    bio: "Dr. Chen has served as Senior Pastor for 15 years and holds a Ph.D. in Theology. He is known for his scholarly approach to biblical interpretation and practical application.",
    email: "michael.chen@firstpres.org",
    phone: "(217) 555-0457",
    yearsOfService: 15,
    socialMedia: {
      facebook: "https://facebook.com/drmichaelchen",
      linkedin: "https://linkedin.com/in/drmichaelchen"
    },
    speakingTopics: [
      {
        name: "Biblical Theology",
        description: "Deep dive into biblical theology and systematic theology",
        category: "teaching"
      },
      {
        name: "Church History",
        description: "Understanding the historical development of Christian doctrine",
        category: "teaching"
      },
      {
        name: "Pastoral Leadership",
        description: "Leading and shepherding a congregation effectively",
        category: "leadership"
      }
    ],
    sortOrder: 3
  },
  {
    name: "Pastor Lisa Williams",
    title: "Lead Pastor",
    bio: "Pastor Lisa is a dynamic speaker and leader who founded New Life Fellowship. She has a gift for making complex biblical concepts accessible to everyone.",
    email: "lisa.williams@newlifefellowship.org",
    phone: "(217) 555-0790",
    yearsOfService: 18,
    socialMedia: {
      facebook: "https://facebook.com/pastorlisawilliams",
      instagram: "https://instagram.com/pastorlisawilliams",
      youtube: "https://youtube.com/pastorlisawilliams"
    },
    speakingTopics: [
      {
        name: "Contemporary Worship",
        description: "Creating meaningful worship experiences for today's church",
        category: "worship"
      },
      {
        name: "Marriage and Family",
        description: "Building strong Christian marriages and families",
        category: "marriage"
      },
      {
        name: "Personal Growth",
        description: "Growing in faith and character as a Christian",
        category: "teaching"
      }
    ],
    sortOrder: 4
  },
  {
    name: "Father Robert Martinez",
    title: "Parish Priest",
    bio: "Father Robert has been serving the Catholic community for 25 years. He is deeply committed to the sacramental life and social teaching of the Church.",
    email: "robert.martinez@stmarys.org",
    phone: "(217) 555-0322",
    yearsOfService: 25,
    socialMedia: {
      facebook: "https://facebook.com/fatherrobertmartinez"
    },
    speakingTopics: [
      {
        name: "Sacramental Life",
        description: "Understanding and living the sacramental life of the Church",
        category: "teaching"
      },
      {
        name: "Catholic Social Teaching",
        description: "Applying Catholic social principles to modern life",
        category: "teaching"
      },
      {
        name: "Spiritual Direction",
        description: "Guidance for spiritual growth and discernment",
        category: "counseling"
      }
    ],
    sortOrder: 5
  },
  {
    name: "Rev. David Thompson",
    title: "Senior Pastor",
    bio: "Rev. Thompson is passionate about Methodist theology and social justice. He has led numerous community outreach programs and mission trips.",
    email: "david.thompson@hopeumc.org",
    phone: "(217) 555-0655",
    yearsOfService: 12,
    socialMedia: {
      facebook: "https://facebook.com/revdavidthompson",
      twitter: "https://twitter.com/revdavidthompson"
    },
    speakingTopics: [
      {
        name: "Methodist Heritage",
        description: "Understanding Wesleyan theology and Methodist tradition",
        category: "teaching"
      },
      {
        name: "Mission and Outreach",
        description: "Living out the Great Commission in practical ways",
        category: "evangelism"
      },
      {
        name: "Community Service",
        description: "Serving others as an expression of Christian faith",
        category: "evangelism"
      }
    ],
    sortOrder: 6
  },
  {
    name: "Pastor Mark Johnson",
    title: "Senior Pastor",
    bio: "Pastor Mark leads Calvary Baptist with a focus on traditional worship and biblical teaching. He has a heart for missions and has served in various countries around the world.",
    email: "mark.johnson@calvarybaptist.org",
    phone: "(217) 555-0988",
    yearsOfService: 22,
    socialMedia: {
      facebook: "https://facebook.com/pastormarkjohnson",
      instagram: "https://instagram.com/pastormarkjohnson",
      youtube: "https://youtube.com/pastormarkjohnson"
    },
    speakingTopics: [
      {
        name: "Missions and Evangelism",
        description: "Sharing the gospel locally and globally",
        category: "evangelism"
      },
      {
        name: "Biblical Authority",
        description: "Understanding the authority and reliability of Scripture",
        category: "teaching"
      },
      {
        name: "Discipleship",
        description: "Growing as followers of Christ in daily life",
        category: "teaching"
      }
    ],
    sortOrder: 7
  },
  {
    name: "Pastor Rebecca Anderson",
    title: "Associate Pastor",
    bio: "Pastor Rebecca brings energy and creativity to youth and family ministry. She has a background in education and is passionate about making faith relevant to young people.",
    email: "rebecca.anderson@calvarybaptist.org",
    phone: "(217) 555-0989",
    yearsOfService: 7,
    socialMedia: {
      instagram: "https://instagram.com/pastorrebecca",
      twitter: "https://twitter.com/pastorrebecca"
    },
    speakingTopics: [
      {
        name: "Youth Discipleship",
        description: "Mentoring and discipling the next generation",
        category: "youth"
      },
      {
        name: "Family Ministry",
        description: "Building strong Christian families",
        category: "family"
      },
      {
        name: "Creative Worship",
        description: "Engaging worship experiences for all ages",
        category: "worship"
      }
    ],
    sortOrder: 8
  },
  {
    name: "Pastor Hans Mueller",
    title: "Senior Pastor",
    bio: "Pastor Hans leads Trinity Lutheran with deep respect for Lutheran tradition while embracing contemporary ministry. He holds a Master of Divinity from Concordia Seminary.",
    email: "hans.mueller@trinitylutheran.org",
    phone: "(217) 555-0457",
    yearsOfService: 18,
    socialMedia: {
      facebook: "https://facebook.com/pastorhansmueller",
      linkedin: "https://linkedin.com/in/pastorhansmueller"
    },
    speakingTopics: [
      {
        name: "Lutheran Theology",
        description: "Understanding grace, faith, and the Word of God",
        category: "teaching"
      },
      {
        name: "Reformation Heritage",
        description: "Learning from the Protestant Reformation",
        category: "teaching"
      },
      {
        name: "Pastoral Care",
        description: "Caring for the spiritual needs of the congregation",
        category: "counseling"
      }
    ],
    sortOrder: 9
  },
  {
    name: "Pastor Jennifer Kim",
    title: "Lead Pastor",
    bio: "Pastor Jennifer founded Cornerstone Community Church with a vision for authentic community and practical faith. She has a gift for connecting with people from all walks of life.",
    email: "jennifer.kim@cornerstonecommunity.org",
    phone: "(217) 555-0791",
    yearsOfService: 13,
    socialMedia: {
      facebook: "https://facebook.com/pastorjenniferkim",
      instagram: "https://instagram.com/pastorjenniferkim",
      twitter: "https://twitter.com/pastorjenniferkim",
      youtube: "https://youtube.com/pastorjenniferkim"
    },
    speakingTopics: [
      {
        name: "Authentic Community",
        description: "Building genuine relationships in the church",
        category: "leadership"
      },
      {
        name: "Practical Faith",
        description: "Living out faith in everyday situations",
        category: "teaching"
      },
      {
        name: "Cultural Engagement",
        description: "Engaging with culture while maintaining biblical truth",
        category: "evangelism"
      }
    ],
    sortOrder: 10
  },
  {
    name: "Rev. Elizabeth Foster",
    title: "Rector",
    bio: "Rev. Elizabeth serves as Rector of St. Paul's Episcopal Church, bringing both traditional Anglican worship and progressive social engagement to the community.",
    email: "elizabeth.foster@stpaulsepiscopal.org",
    phone: "(217) 555-0323",
    yearsOfService: 16,
    socialMedia: {
      facebook: "https://facebook.com/revlizfoster",
      instagram: "https://instagram.com/revlizfoster",
      twitter: "https://twitter.com/revlizfoster"
    },
    speakingTopics: [
      {
        name: "Anglican Tradition",
        description: "Understanding Episcopal worship and theology",
        category: "teaching"
      },
      {
        name: "Social Justice",
        description: "Living out faith through social action",
        category: "evangelism"
      },
      {
        name: "Liturgical Worship",
        description: "The beauty and meaning of liturgical worship",
        category: "worship"
      }
    ],
    sortOrder: 11
  },
  {
    name: "Pastor James Rodriguez",
    title: "Senior Pastor",
    bio: "Pastor James leads Victory Assembly of God with passion for the Holy Spirit's work in people's lives. He has seen many miracles and healings in his ministry.",
    email: "james.rodriguez@victoryassembly.org",
    phone: "(217) 555-0656",
    yearsOfService: 20,
    socialMedia: {
      facebook: "https://facebook.com/pastorjamesrodriguez",
      instagram: "https://instagram.com/pastorjamesrodriguez",
      youtube: "https://youtube.com/pastorjamesrodriguez"
    },
    speakingTopics: [
      {
        name: "Holy Spirit Power",
        description: "Understanding and experiencing the Holy Spirit",
        category: "preaching"
      },
      {
        name: "Divine Healing",
        description: "Believing and receiving God's healing power",
        category: "preaching"
      },
      {
        name: "Spiritual Gifts",
        description: "Discovering and using spiritual gifts",
        category: "teaching"
      }
    ],
    sortOrder: 12
  },
  {
    name: "Pastor Maria Santos",
    title: "Associate Pastor",
    bio: "Pastor Maria serves at Victory Assembly with a focus on women's ministry and prayer. She has a heart for intercession and seeing God move in powerful ways.",
    email: "maria.santos@victoryassembly.org",
    phone: "(217) 555-0657",
    yearsOfService: 8,
    socialMedia: {
      facebook: "https://facebook.com/pastormariasantos",
      instagram: "https://instagram.com/pastormariasantos"
    },
    speakingTopics: [
      {
        name: "Women in Ministry",
        description: "The role of women in church leadership",
        category: "leadership"
      },
      {
        name: "Prayer and Intercession",
        description: "The power and importance of prayer",
        category: "prayer"
      },
      {
        name: "Spiritual Warfare",
        description: "Understanding and engaging in spiritual warfare",
        category: "teaching"
      }
    ],
    sortOrder: 13
  },
  {
    name: "Dr. William Brown",
    title: "Senior Pastor",
    bio: "Dr. Brown leads First Baptist Downtown with a focus on urban ministry and social justice. He holds a Ph.D. in Urban Ministry and has served in inner-city churches for over 25 years.",
    email: "william.brown@firstbaptistdowntown.org",
    phone: "(217) 555-0124",
    yearsOfService: 25,
    socialMedia: {
      facebook: "https://facebook.com/drwilliambrown",
      twitter: "https://twitter.com/drwilliambrown",
      linkedin: "https://linkedin.com/in/drwilliambrown"
    },
    speakingTopics: [
      {
        name: "Urban Ministry",
        description: "Serving God in the city context",
        category: "evangelism"
      },
      {
        name: "Racial Reconciliation",
        description: "Working toward unity in the body of Christ",
        category: "leadership"
      },
      {
        name: "Community Development",
        description: "Transforming communities through faith",
        category: "evangelism"
      }
    ],
    sortOrder: 14
  },
  {
    name: "Pastor Anna Schmidt",
    title: "Senior Pastor",
    bio: "Pastor Anna leads Grace Lutheran with a heart for traditional Lutheran worship and contemporary outreach. She has a gift for making ancient truths relevant to modern life.",
    email: "anna.schmidt@gracelutheran.org",
    phone: "(217) 555-0792",
    yearsOfService: 14,
    socialMedia: {
      facebook: "https://facebook.com/pastorannaschmidt",
      instagram: "https://instagram.com/pastorannaschmidt"
    },
    speakingTopics: [
      {
        name: "Grace and Law",
        description: "Understanding the relationship between grace and law",
        category: "teaching"
      },
      {
        name: "Sacramental Theology",
        description: "The meaning and importance of baptism and communion",
        category: "teaching"
      },
      {
        name: "Christian Vocation",
        description: "Living out faith in daily work and life",
        category: "teaching"
      }
    ],
    sortOrder: 15
  },
  {
    name: "Pastor Michael Davis",
    title: "Youth Pastor",
    bio: "Pastor Michael serves as Youth Pastor at Grace Lutheran, bringing energy and creativity to youth ministry. He has a passion for helping young people discover their faith.",
    email: "michael.davis@gracelutheran.org",
    phone: "(217) 555-0793",
    yearsOfService: 6,
    socialMedia: {
      instagram: "https://instagram.com/pastormichaeldavis",
      twitter: "https://twitter.com/pastormichaeldavis",
      youtube: "https://youtube.com/pastormichaeldavis"
    },
    speakingTopics: [
      {
        name: "Youth Discipleship",
        description: "Mentoring young people in their faith journey",
        category: "youth"
      },
      {
        name: "Faith and Technology",
        description: "Using technology to share the gospel",
        category: "evangelism"
      },
      {
        name: "Peer Ministry",
        description: "Training young people to minister to their peers",
        category: "leadership"
      }
    ],
    sortOrder: 16
  }
];

// Church-speaker relationships
export const churchSpeakerRelations = [
  { churchIndex: 0, speakerIndices: [0, 1] }, // Grace Community Church
  { churchIndex: 1, speakerIndices: [2] },    // First Presbyterian Church
  { churchIndex: 2, speakerIndices: [3] },    // New Life Fellowship
  { churchIndex: 3, speakerIndices: [4] },    // St. Mary's Catholic Church
  { churchIndex: 4, speakerIndices: [5] },    // Hope United Methodist
  { churchIndex: 5, speakerIndices: [6, 7] }, // Calvary Baptist Church
  { churchIndex: 6, speakerIndices: [8] },    // Trinity Lutheran Church
  { churchIndex: 7, speakerIndices: [9] },    // Cornerstone Community Church
  { churchIndex: 8, speakerIndices: [10] },   // St. Paul's Episcopal Church
  { churchIndex: 9, speakerIndices: [11, 12] }, // Victory Assembly of God
  { churchIndex: 10, speakerIndices: [13] },  // First Baptist Church Downtown
  { churchIndex: 11, speakerIndices: [14, 15] } // Grace Lutheran Church
];

export async function seedDatabase(strapi: Core.Strapi): Promise<void> {
  try {
    console.log('🚀 Starting database seeding...');
    
    // Get existing churches and speakers to check for duplicates
    const existingChurches = await strapi.documents('api::church.church').findMany({
      fields: ['id', 'name']
    });
    
    const existingSpeakers = await strapi.documents('api::speaker.speaker').findMany({
      fields: ['id', 'name']
    });
    
    const existingChurchNames = new Set(existingChurches.map(church => church.name));
    const existingSpeakerNames = new Set(existingSpeakers.map(speaker => speaker.name));
    
    console.log('📊 Creating churches...');
    const createdChurches: any[] = [];
    
    for (const churchData of churchesData) {
      if (existingChurchNames.has(churchData.name)) {
        console.log(`⏭️  Church "${churchData.name}" already exists, skipping...`);
        // Find the existing church to use for speaker relationships
        const existingChurch = existingChurches.find(c => c.name === churchData.name);
        if (existingChurch) {
          createdChurches.push(existingChurch);
        }
        continue;
      }
      
      try {
        const church = await strapi.documents('api::church.church').create({
          data: {
            ...churchData,
            publishedAt: new Date()
          }
        });
        createdChurches.push(church);
        console.log(`✅ Created church: ${church.name}`);
      } catch (error: any) {
        console.error(`❌ Error creating church ${churchData.name}:`, error.message);
      }
    }
    
    console.log('👥 Creating speakers...');
    const createdSpeakers: any[] = [];
    
    for (let i = 0; i < speakersData.length; i++) {
      const speakerData = speakersData[i];
      
      if (existingSpeakerNames.has(speakerData.name)) {
        console.log(`⏭️  Speaker "${speakerData.name}" already exists, skipping...`);
        // Find the existing speaker to use for relationships
        const existingSpeaker = existingSpeakers.find(s => s.name === speakerData.name);
        if (existingSpeaker) {
          createdSpeakers.push(existingSpeaker);
        }
        continue;
      }
      
      // Find the church for this speaker
      let churchId: number | null = null;
      for (const relation of churchSpeakerRelations) {
        if (relation.speakerIndices.includes(i)) {
          churchId = createdChurches[relation.churchIndex]?.id;
          break;
        }
      }
      
      try {
        const speaker = await strapi.documents('api::speaker.speaker').create({
          data: {
            ...speakerData,
            church: churchId,
            publishedAt: new Date()
          }
        });
        createdSpeakers.push(speaker);
        console.log(`✅ Created speaker: ${speaker.name} (${speaker.title})`);
      } catch (error: any) {
        console.error(`❌ Error creating speaker ${speakerData.name}:`, error.message);
      }
    }
    
    console.log('🔗 Linking speakers to churches...');
    
    // Update churches with their speakers
    for (const relation of churchSpeakerRelations) {
      const church = createdChurches[relation.churchIndex];
      const speakerIds = relation.speakerIndices
        .map(index => createdSpeakers[index]?.id)
        .filter(id => id);
      
      if (church && speakerIds.length > 0) {
        try {
          // Use the relation service to connect speakers to churches
          for (const speakerId of speakerIds) {
            await strapi.documents('api::speaker.speaker').update({
              documentId: speakerId,
              data: {
                church: church.id
              }
            });
          }
          console.log(`✅ Linked ${speakerIds.length} speakers to ${church.name}`);
        } catch (error: any) {
          console.error(`❌ Error linking speakers to ${church.name}:`, error.message);
        }
      }
    }
    
    const newChurches = createdChurches.filter(church => !existingChurchNames.has(church.name));
    const newSpeakers = createdSpeakers.filter(speaker => !existingSpeakerNames.has(speaker.name));
    
    console.log('🎉 Database seeding completed successfully!');
    console.log(`📊 Churches: ${newChurches.length} new, ${createdChurches.length - newChurches.length} existing`);
    console.log(`👥 Speakers: ${newSpeakers.length} new, ${createdSpeakers.length - newSpeakers.length} existing`);
    
  } catch (error: any) {
    console.error('❌ Error during seeding:', error);
  }
}
