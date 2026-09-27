export const name="network_locked-fill";
export const id="dl_ac5c83e184adfa12c98e";
export const url=new URL("../icons/network_locked-fill.svg?v=891a65d61d09a7221d5912addc908703e5671827bcc5bcedb20441ea48b7273d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
