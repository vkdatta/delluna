export const name="settings_ethernet-fill";
export const id="dl_c60ce3cbb241af25e614";
export const url=new URL("../icons/settings_ethernet-fill.svg?v=328cdd4a85497f52fb5aca9a05db21ed09a9631fe63239710e87190663e25772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
