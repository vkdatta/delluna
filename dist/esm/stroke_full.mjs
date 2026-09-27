export const name="stroke_full";
export const id="dl_d61aa4faab7f8632b7b3";
export const url=new URL("../icons/stroke_full.svg?v=af2fa72635ce0df4b3081b120ae5032fc2ed5023c18146877772f2c3bae00790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
