export const name="expansion_panels-fill";
export const id="dl_1737a906bb01404895be";
export const url=new URL("../icons/E/expansion_panels-fill.svg?v=9e40f4b75a1c432940ea7b6e521702d0d9eb7c676cda42a6006053438f07d2a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
