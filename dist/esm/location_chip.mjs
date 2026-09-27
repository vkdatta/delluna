export const name="location_chip";
export const id="dl_9a986a9343ab979f1131";
export const url=new URL("../icons/location_chip.svg?v=0ad81753e1c0f8261a7271e9b24b769d7eac8ca5b1116fe67d45e61208e738bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
