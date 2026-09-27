export const name="warning-circle-duotone";
export const id="dl_2ac655021dddec80b4f5";
export const url=new URL("../icons/warning-circle-duotone.svg?v=d0b7e244c1e5df2093690a2b3c990c2aad72d5e889739238489fe51159ce1b40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
