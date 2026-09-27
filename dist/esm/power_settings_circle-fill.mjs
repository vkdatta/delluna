export const name="power_settings_circle-fill";
export const id="dl_718bae031ca90d597334";
export const url=new URL("../icons/power_settings_circle-fill.svg?v=2fa755b443a021fd7910e77c895cf22e4ec338ee3a7003588ca377c5d463a8e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
