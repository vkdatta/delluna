export const name="wifi-x-light";
export const id="dl_aeb7c41f5a584949a8ec";
export const url=new URL("../icons/W/wifi-x-light.svg?v=ac795e879e1cc1dd07f9853668d7ca5074c27fde6b464674a48ebfffe9b2c844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
