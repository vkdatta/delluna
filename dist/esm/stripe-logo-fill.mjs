export const name="stripe-logo-fill";
export const id="dl_a0546858a0624446876d";
export const url=new URL("../icons/S/stripe-logo-fill.svg?v=e0aacb376e55ac61f2102c0c9fdc2d05e0a6e88ea29fade982cfc14e4acc8aae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
