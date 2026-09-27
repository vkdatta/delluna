export const name="safety_check_off";
export const id="dl_4c8502ce614987751bef";
export const url=new URL("../icons/safety_check_off.svg?v=91c9008d9d186624727ad9d8bae5cd8a7713a05588f2da757bd9d7c2c14df27d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
