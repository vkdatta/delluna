export const name="broadcast-fill";
export const id="dl_8cd0d562313647cda48d";
export const url=new URL("../icons/broadcast-fill.svg?v=8834cb8365d80755af4e0a6df9ccbe7a13b41f49e3b8292cfc32ea3c0234d9a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
