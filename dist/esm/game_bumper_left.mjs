export const name="game_bumper_left";
export const id="dl_9d6bfad6cb21faea1f7d";
export const url=new URL("../icons/game_bumper_left.svg?v=5e7cc84eb8468426bf69bc078f2982dd2cda257269a6510e039ba16a795f8b5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
