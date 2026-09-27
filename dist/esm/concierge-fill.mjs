export const name="concierge-fill";
export const id="dl_48acf1ad70d9e7c18319";
export const url=new URL("../icons/concierge-fill.svg?v=4a297ca8b7c5a1eeaff3fc43611d3abfd8f42574ccc2f3dba92379ae6c7b69c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
