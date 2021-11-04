import { Flag } from "./flag";

export interface Country {
  name: string;
  capital?: string;
  region: string;
  flags: Flag;
}
