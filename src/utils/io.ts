import { environment } from "@raycast/api"
import * as fs from "node:fs";
import { InitialGitMojis } from "../constants";
import { GitMoji } from "../types";

export const getGitMojis = () => {
  const path = environment.assetsPath + '/gitmojis.json'
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify(InitialGitMojis))
  }
  return JSON.parse(fs.readFileSync(path, 'utf8')) as GitMoji[]
}