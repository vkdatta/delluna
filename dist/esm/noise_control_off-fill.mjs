export const name="noise_control_off-fill";
export const id="dl_6ab9b513147b48f7b342";
export const url=new URL("../icons/N/noise_control_off-fill.svg?v=bd64fd80d7d2a1868fab3221bea397cb2908f10013547a671b6afff7a839b05b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
