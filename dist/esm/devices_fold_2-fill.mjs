export const name="devices_fold_2-fill";
export const id="dl_65dbe487d74570f41775";
export const url=new URL("../icons/devices_fold_2-fill.svg?v=01d7e2d81be529e325b845ad22cdfc4059e0b3f0b454e245478c9627e9a52d12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
