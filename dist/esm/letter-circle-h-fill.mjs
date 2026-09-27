export const name="letter-circle-h-fill";
export const id="dl_c18eb78ebc0248bc8895";
export const url=new URL("../icons/letter-circle-h-fill.svg?v=fa8eb977d277f47abc156333abeb29fd1f4dec1b1da411b8d605449929c706d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
