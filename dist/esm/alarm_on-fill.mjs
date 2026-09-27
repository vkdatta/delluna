export const name="alarm_on-fill";
export const id="dl_30ae8051eb69a8174f0e";
export const url=new URL("../icons/alarm_on-fill.svg?v=c886f80e1eb96f4e1ff129582453e27c49a36ff26ea55c248250d2602a907655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
