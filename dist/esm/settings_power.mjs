export const name="settings_power";
export const id="dl_025ea92809ac8048cc37";
export const url=new URL("../icons/settings_power.svg?v=96479ef4dec0efc3d97e8b7912e4a4c0b907f30f8aef614f652b735c0303b149",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
