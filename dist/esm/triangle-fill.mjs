export const name="triangle-fill";
export const id="dl_d643eb4f360263cbe41d";
export const url=new URL("../icons/triangle-fill.svg?v=f04730e81c5f96f83a180c7349ad18226ab69e3039b579c3eb34d21e9c9a986e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
