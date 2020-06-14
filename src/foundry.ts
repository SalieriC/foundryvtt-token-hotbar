import { HotbarData } from './flags/hotbarFlags';

export interface Notifier {
    info: (string) => void;
    warn: (string) => void;
    error: (string) => void;
}

export interface User {
    update(data: unknown): unknown;
    isGM: boolean;
}

export interface Identifiable {
    id: string;
}

export interface Macro {
    macro: Identifiable;
    slot: number;
}

export interface Flaggable extends Identifiable {
    getFlag(scope: string, key: string): HotbarData | undefined;
    setFlag(scope: string, key: string, data?: HotbarData): Promise<Flaggable>;
    unsetFlag(scope: string, key: string): Promise<Flaggable>;
}

export type IActor = Flaggable

export interface IToken extends Flaggable {
    data: { actorLink: boolean };
    actor?: IActor;
}