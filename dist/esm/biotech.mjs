export const name="biotech";
export const id="dl_490fe6e03db5837a5fb1";
export const url=new URL("../icons/biotech.svg?v=273e45ba95dfea6686509b15ddc99f16220aa02b63fd9505000025c890fe77f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
