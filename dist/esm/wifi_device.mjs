export const name="wifi_device";
export const id="dl_2dc88094e16c4ffd9975";
export const url=new URL("../icons/W/wifi_device.svg?v=76334d3d6ff1e31da5b1e74c875c3c7b7f082000236b53fd0946c941f5551843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
