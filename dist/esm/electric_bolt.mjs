export const name="electric_bolt";
export const id="dl_40242b40f655952d64c4";
export const url=new URL("../icons/electric_bolt.svg?v=8300a8a6d9f6cf91ae8a8113a475f2326a5f8819d83105e1f5fd2c2f69df2a96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
