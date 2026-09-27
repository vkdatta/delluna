export const name="gear-fine";
export const id="dl_83adccf2e93546b4a63d";
export const url=new URL("../icons/gear-fine.svg?v=4c7b28a8752abba680bc33997f236bb1e4f7a3b7fcdb34aa8ec9cb4ec5535dd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
