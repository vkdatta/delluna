export const name="stethoscope-fill";
export const id="dl_24525af3772742c7b922";
export const url=new URL("../icons/S/stethoscope-fill.svg?v=0b5629785371bd9d0b702f24c2b9fa0555f1c6d0176077a54fed64bda9a4bd88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
