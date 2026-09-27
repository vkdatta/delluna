export const name="cigarette-duotone";
export const id="dl_bb5aaed69148436dbb84";
export const url=new URL("../icons/cigarette-duotone.svg?v=42be453ddd349797f23e0de1522fd9fbf8d16dcb23e941e3178faed4c6220aac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
