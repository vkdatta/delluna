export const name="directions_off";
export const id="dl_dd15dcdaa5c647031edc";
export const url=new URL("../icons/directions_off.svg?v=89ae00e38931b897407c98105c94b769b3e353dc2f15e31d2971e45f6b207792",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
