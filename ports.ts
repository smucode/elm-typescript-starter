interface Subscriptions {
  toJs: (msg: string, commands: Commands) => void;
  toJs2: (msg: string, commands: Commands) => void;
}

interface Commands {
  fromJs: (msg: string) => void;
}

interface ElmApp {
  ports: {
    toJs: { subscribe: (sub: (msg: string) => void) => void };
    toJs2: { subscribe: (sub: (msg: string) => void) => void };
    fromJs: { send: (msg: string) => void };
  };
}

export const init = (app: ElmApp, subs: Subscriptions) => {
  const commands = {
    fromJs: (msg: string) => app.ports.fromJs.send(msg),
  };
  app.ports.toJs.subscribe((msg) => subs.toJs(msg, commands));
  app.ports.toJs2.subscribe((msg) => subs.toJs2(msg, commands));
  return { commands };
};

export default { init };
