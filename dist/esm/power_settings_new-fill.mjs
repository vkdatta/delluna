export const name="power_settings_new-fill";
export const id="dl_f9348e591a894c5a9914";
export const url=new URL("../icons/P/power_settings_new-fill.svg?v=b5cd852c06d1a8c7f88dedb9ad70cf3a736d136f550dc8f27b99a1985d6de2a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
