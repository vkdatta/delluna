export const name="sheets";
export const id="dl_aba16ec6b15e4b49b73f";
export const url=new URL("../icons/sheets.svg?v=257864bf8a9244bd352f8400c25f2d3154be9b0795c27b5a3a04218eadeccc0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
