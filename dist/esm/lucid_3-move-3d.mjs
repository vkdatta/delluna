export const name="lucid_3-move-3d";
export const id="dl_c7fa904ecddc41e3a2c1";
export const url=new URL("../icons/lucid_3-move-3d.svg?v=10597226172f79ce71ee42466e6f87fa35a53378a32d83184cff33c832e0bcd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
