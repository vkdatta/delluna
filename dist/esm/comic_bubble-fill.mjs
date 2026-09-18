export const name="comic_bubble-fill";
export const id="dl_7b6f7ef3e0bf409bad8b";
export const url=new URL("../icons/comic_bubble-fill.svg?v=fd905b71937474a21021b621ca54214e98fcf8d02d81b9a41f5c3b1f6dd4e5f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
