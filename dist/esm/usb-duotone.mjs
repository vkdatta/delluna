export const name="usb-duotone";
export const id="dl_d55a0caee102973db87d";
export const url=new URL("../icons/usb-duotone.svg?v=bf456bd53ecd77294ccb3c09239830536e139b7e6359cf556b791791dcb1646b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
