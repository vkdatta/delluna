export const name="subscriptions-fill";
export const id="dl_6a39d466f1c587365375";
export const url=new URL("../icons/subscriptions-fill.svg?v=23b7d72ae83068f2d29211bdeffef64f4166952df7758af216488e279d3388f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
