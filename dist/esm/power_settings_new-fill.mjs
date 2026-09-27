export const name="power_settings_new-fill";
export const id="dl_6c04551bff7db8aec816";
export const url=new URL("../icons/power_settings_new-fill.svg?v=f03d51c2bbe59d597fa5b15e62820048c7ea2d7a7b3f38d008b3c09b6d049db6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
