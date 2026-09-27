export const name="perm_media";
export const id="dl_5b9d68011257f8734725";
export const url=new URL("../icons/perm_media.svg?v=b8d6f3bd2fb2f7e1eb4e069389a1f28a54b32b462657c834e9e08aaf366bfb68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
