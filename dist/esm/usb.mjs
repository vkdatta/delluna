export const name="usb";
export const id="dl_8725835e6d4e493baf06";
export const url=new URL("../icons/usb.svg?v=fd1dc6420ac6af0666951a9a701ad53fa9b6e5653eb5ad14f3210a957721068c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
