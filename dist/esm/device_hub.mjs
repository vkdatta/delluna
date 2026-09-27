export const name="device_hub";
export const id="dl_ec58ff71019a84e10bba";
export const url=new URL("../icons/device_hub.svg?v=6e8339a4dd778b6d136d229e4f821cab3265c63570faedea1742d330c724fa8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
