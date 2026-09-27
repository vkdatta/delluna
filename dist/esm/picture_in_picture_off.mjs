export const name="picture_in_picture_off";
export const id="dl_e2f08f3849531544146a";
export const url=new URL("../icons/picture_in_picture_off.svg?v=1e8cbb53eaa04bab72ac5f822e9e1c32b78668f3371ed517a19df18c63d18401",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
