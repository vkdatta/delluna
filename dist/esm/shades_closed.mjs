export const name="shades_closed";
export const id="dl_0319f672d0421a03f697";
export const url=new URL("../icons/shades_closed.svg?v=9bb259fbfc9b164193baed8fbea3e6387c62b660fde6d82b989d9fee0355c8c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
