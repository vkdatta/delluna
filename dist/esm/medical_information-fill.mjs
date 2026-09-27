export const name="medical_information-fill";
export const id="dl_327456dba8cdde6cdfb9";
export const url=new URL("../icons/medical_information-fill.svg?v=fcc96b2c78865fc26257ac6c81d4aa80260c32ec78f53734a7f748bb83846cae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
