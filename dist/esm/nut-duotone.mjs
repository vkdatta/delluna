export const name="nut-duotone";
export const id="dl_dece4a949d994a189694";
export const url=new URL("../icons/nut-duotone.svg?v=912202aed6730db8e7e8a6fe19ae342845f5f0072695efae9d4e2302fb1ca562",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
