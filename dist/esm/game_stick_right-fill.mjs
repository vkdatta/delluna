export const name="game_stick_right-fill";
export const id="dl_9a94a9fe2b407e253f09";
export const url=new URL("../icons/game_stick_right-fill.svg?v=c6fa9e112fd83a8a5225182ed5ab2e6615d5e4b9901af29f5e61b796e2aabe8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
