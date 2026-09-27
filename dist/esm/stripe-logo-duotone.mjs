export const name="stripe-logo-duotone";
export const id="dl_4fe36bdc79484932e316";
export const url=new URL("../icons/stripe-logo-duotone.svg?v=47d6d04ccddb54dc820e299ec41e805d89b7599aba631af72b105ba4f90969cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
