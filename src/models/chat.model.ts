export class Message {
  readonly content: string;
  readonly author: string;

  constructor(content: string,
              author: string) {
    this.content = content;
    this.author = author;
  }
}

export class ChatUser {
  readonly userName: string;
  // readonly avatar: string;

  constructor(userName: string,
              // avatar: string
  ) {
    this.userName = userName;
    // this.avatar = avatar;
  }
}

