export const name="office-chair-light";
export const id="dl_011869c5c9a84528b2b4";
export const url=new URL("../icons/office-chair-light.svg?v=9609de42062b244ba5bac9e6f2b9e9a49eab2bbae8ad1b0dcab99e79967ef931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
