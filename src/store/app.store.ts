import { Subject, BehaviorSubject, Subscription } from "rxjs";

interface EventSubject {
  type: string;
  payload: any;
}

interface StateSubject {
  theme: string;
}

export default class AppStore {
  events = new Subject<EventSubject>();
  state = new BehaviorSubject<StateSubject>({ theme: "light" });
  sub!: Subscription;

  constructor() {
    this.reducer();
  }

  reducer() {
    this.sub = this.events.subscribe((event) => {
      const state = { ...this.state.getValue() };
      switch (event.type) {
        case "THEME_CHANGE": {
          state.theme = event.payload;
          this.state.next(state);
          break;
        }
      }
    });
  }

  destroy() {
    this.sub.unsubscribe();
  }
}
