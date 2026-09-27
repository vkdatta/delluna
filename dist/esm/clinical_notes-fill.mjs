export const name="clinical_notes-fill";
export const id="dl_3e5bd951d638166fec66";
export const url=new URL("../icons/clinical_notes-fill.svg?v=521249c7d1cebd9459152d712df14b72ef0e62d66009f51bc8290e1ecbac8031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
