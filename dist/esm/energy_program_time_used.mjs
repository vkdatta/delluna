export const name="energy_program_time_used";
export const id="dl_e98ca6cc00ebe633928f";
export const url=new URL("../icons/energy_program_time_used.svg?v=f305c96a13d93306018bc82683ec9578e63ab6706d2671c8b35832b13e0ba3fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
