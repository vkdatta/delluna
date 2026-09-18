export const name="select-fill";
export const id="dl_fa3635dddc154738b7eb";
export const url=new URL("../icons/S/select-fill.svg?v=00a926a13175943bda5139faedb42f6a39517bf43b2d2e52dc5a2ad4db1ac92d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
