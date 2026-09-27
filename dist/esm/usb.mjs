export const name="usb";
export const id="dl_8725835e6d4e493baf06";
export const url=new URL("../icons/usb.svg?v=9f77476d1858a9b79ec70f6b8b4aee3b9e6c2eeed9e0c1a565d35f3a3548cb07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
