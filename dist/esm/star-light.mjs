export const name="star-light";
export const id="dl_a9684629bd4fc6ed5aee";
export const url=new URL("../icons/star-light.svg?v=fd89be152b397123307e0743f49d9d5266a169542b11fcb5393becd122a8e9eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
