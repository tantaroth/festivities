export interface User {
    uid: string;
    aboutMe?: string;
    country?: string; // REF TO COUNTRIES COLLECTION
    cover?: string; // PATH ABSOLUTE
    createAt: Date;
    email: string;
    username: string;
    langs?: []; // REF TO LANGS COLLECTION
    networks?: []; // [{provider: 'facebook or instagram', public: true, url: 'URL OF SOCIAL NETWORK' }]
    displayName: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    phoneNumber: string;
    photoURL: string; // PATH ABSOLUTE
}