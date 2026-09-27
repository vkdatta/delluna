export const name="lucid_1-cable-car";
export const id="dl_92b37ed0c2f34bc4acd9";
export const url=new URL("../icons/lucid_1-cable-car.svg?v=490617cd8b62f6a3305ef0bd0ee23a6f971a080d8663978e035f6ae034e76349",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
