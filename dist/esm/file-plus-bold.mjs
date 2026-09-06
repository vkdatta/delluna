export const name="file-plus-bold";
export const id="dl_0923f0f8152f439d8a84";
export const url=new URL("../icons/file-plus-bold.svg?v=8c6a3c86bfd1ec4f97dcb0f35c426d40096f332c49c5f565666b9e3f7963e674",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
