export const name="stripe-logo-bold";
export const id="dl_c010d206f623ca07d4fd";
export const url=new URL("../icons/stripe-logo-bold.svg?v=a386543b2eb503ce09314d9c72a695f471cc22c71809d4d27550e3ed01c414dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
