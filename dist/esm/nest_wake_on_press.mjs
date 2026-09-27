export const name="nest_wake_on_press";
export const id="dl_3f42bac536dc7845463f";
export const url=new URL("../icons/nest_wake_on_press.svg?v=8913ba8aeb0c9b2525fb3883f5cc8fb688993abae67e0e5403ddc2fa97b570ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
