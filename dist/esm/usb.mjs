export const name="usb";
export const id="dl_8725835e6d4e493baf06";
export const url=new URL("../icons/usb.svg?v=2af628ae71425e0a0e1f12dceefb77dd4ff147602e2d8e5f15272fb0d58513cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
