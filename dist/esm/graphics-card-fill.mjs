export const name="graphics-card-fill";
export const id="dl_381529596a9f42a08525";
export const url=new URL("../icons/graphics-card-fill.svg?v=bc1f952cefc1a08c50e81e35a6211b604f719018c6f1fed192b9834a1a62d4c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
