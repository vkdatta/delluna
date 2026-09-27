export const name="clinical_notes";
export const id="dl_4260fd15f4759b1d0403";
export const url=new URL("../icons/clinical_notes.svg?v=19629b589a5b21dbb6f7b122be3edd4841e805c547584eb30e8fd29ca25dea4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
