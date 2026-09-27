export const name="museum-fill";
export const id="dl_3cbe9b1fa6a5f9ae215a";
export const url=new URL("../icons/museum-fill.svg?v=4253ba5ddf563c6b46edd1a642de457bd8c7d8b37212489ef0ec41bbad7e4a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
