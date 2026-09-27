export const name="wifi_channel-fill";
export const id="dl_d51e38e3b797dd1e148e";
export const url=new URL("../icons/wifi_channel-fill.svg?v=f0fe3056ead4db0de9c0f40d068b27d02471887af1f4f2e078543737233062fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
