export const name="star-of-david-fill";
export const id="dl_1eef76052ed7485791de";
export const url=new URL("../icons/S/star-of-david-fill.svg?v=a853e80d88865fe6a870e759634d0c33a2c00fb6a711a67bc2644562e85fe312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
