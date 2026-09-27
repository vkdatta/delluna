export const name="shadow_minus";
export const id="dl_36c95eed5d2a07381384";
export const url=new URL("../icons/shadow_minus.svg?v=82bfd6d2e5e65f78bcea4479a6612c28d2bdffbc61be60970c545eec1d5c7cea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
