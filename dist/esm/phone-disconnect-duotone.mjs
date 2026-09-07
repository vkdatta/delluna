export const name="phone-disconnect-duotone";
export const id="dl_692b18fd4ba64e9faedb";
export const url=new URL("../icons/phone-disconnect-duotone.svg?v=2da4dfaa649a63c84b00f1b781046f7baf5cac840ccfc98ca03d1504254b64ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
