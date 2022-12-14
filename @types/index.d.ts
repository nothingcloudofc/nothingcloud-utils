import { Response } from "node-fetch";

interface StatusType {
    ram(): string;
    ramUsed(): string;
    ramTotal(): string;
}

interface TerminalType {
    info(message: any): void;
    warn(message: any): void;
    error(message: any): void;
    success(message: any): void;
    debug(message: any): void;
}

interface RegistryType {
    /**
    * Conveniently saves information in a .log/.txt file.
    * @param message Message that will be saved in the log file. (Date is automatically added)
    * @param archive Directory/log file name.
    * @param timeZone (Default: America/Sao_Paulo).
    */
    add(message: string, archive: string, timeZone: string): void;

    /**
    * Delete the log file.
    * @param archive Directory/log file name.
    */
    del(archive: string): void;

    /**
    * Check that the log file directory/name exists.
    * @param archive Directory/log file name.
    */
    check(archive: string): boolean;
}

declare module "@nothingcloud/utils" {
    export const Status: StatusType;

    export const Terminal: TerminalType;

    export const Registry: RegistryType;

    export function prototype(): void;

    /**
    * It monitors a function and if an error is caught, it is stored / distributed.
    * @param fn Function to monitor.
    * @param path Error return. File or webhook.
    */
    export function apply(fn: Function, path: string): Promise<unknown | Response>;

     /**
    * Send a Discord Webhook easily and conveniently.
    * @param object Webhook object or string. Example: { content: "hi content :)" }.
    * @param webhook Webhook URL.
    */
    export function webhook(object: string | object, webhook: string): Promise<Response>;
}