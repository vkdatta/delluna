export const name="icecream-fill";
export const id="dl_9321fe3854290db46fec";
export const url=new URL("../icons/icecream-fill.svg?v=f5f15e28a33722e15f92f4d1958e7484de07ec8b676d6253879a03077f21810a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
