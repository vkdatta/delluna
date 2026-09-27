export const name="lucid_2-infinity";
export const id="dl_7fabe8b697f140b5a5ea";
export const url=new URL("../icons/lucid_2-infinity.svg?v=1c044dfbbe1d830c10932a704d741eda9424bbd7006a5acfe3d4c6d0b0dff353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
