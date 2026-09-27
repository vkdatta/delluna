export const name="settings_system_daydream";
export const id="dl_131091910eed0a003cda";
export const url=new URL("../icons/settings_system_daydream.svg?v=7671f39b6c8a2c77f989e6bf94213a376c38e312026bc4c8bc30e46ec1c425b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
