export const name="ios-fill";
export const id="dl_d4b413b4cedd4832b67b";
export const url=new URL("../icons/ios-fill.svg?v=33ad4f0313865639af2ad7d8b2ea068d5b1679a5d7f469509c4aa7d47dfd7b3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
