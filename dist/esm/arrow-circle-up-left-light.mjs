export const name="arrow-circle-up-left-light";
export const id="dl_1f724077e8094225b353";
export const url=new URL("../icons/arrow-circle-up-left-light.svg?v=c037044cd6896bc7e2c5120cb034807414824ad7b0601c19e558a8aad7b42ac5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
