export const name="switch_off";
export const id="dl_2cc48cdda973965465b6";
export const url=new URL("../icons/switch_off.svg?v=397e023b6c8e6a3ff6ea841ad4760a4379a9cb8408b19f48d56861715a7c59ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
