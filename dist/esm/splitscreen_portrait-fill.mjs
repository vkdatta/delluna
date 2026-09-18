export const name="splitscreen_portrait-fill";
export const id="dl_cd8fa4a3df164854bb65";
export const url=new URL("../icons/splitscreen_portrait-fill.svg?v=8b08c84360c84187e0be7668c653c4af8087c822591bc1397885a2811a168db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
