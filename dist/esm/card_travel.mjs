export const name="card_travel";
export const id="dl_cb0e2b0b6ed64f61be8c";
export const url=new URL("../icons/C/card_travel.svg?v=be2a0af173d3f6d3408d05774c82c30f718515c9a0997b7fb8f0d155b3d4caf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
