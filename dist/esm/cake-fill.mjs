export const name="cake-fill";
export const id="dl_0018db462a1b4b118b3b";
export const url=new URL("../icons/cake-fill.svg?v=7be52877654cf5adf587bc08a34be8437b6e3ff31ef0bffa52c863ba315fc639",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
