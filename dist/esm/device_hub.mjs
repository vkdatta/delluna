export const name="device_hub";
export const id="dl_565c14aefa9347a839df";
export const url=new URL("../icons/device_hub.svg?v=b48901fe4515b00f01da1db6f3ff6081b6f2347ea44d49ed445ed6bf5c997988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
