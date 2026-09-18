export const name="picture_in_picture_mobile";
export const id="dl_9c5e8d07730d40f5877f";
export const url=new URL("../icons/picture_in_picture_mobile.svg?v=ba958ae7eb1801d5a65eb265db76a4720b9589717e56e83992d95c11f9cc326a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
