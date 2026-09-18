export const name="blinds_2_closed-fill";
export const id="dl_409df67cb11747c1a3a6";
export const url=new URL("../icons/blinds_2_closed-fill.svg?v=3147990fba51931bcae40c5e2091277f5e8eb24268eb324617c636bab34626b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
