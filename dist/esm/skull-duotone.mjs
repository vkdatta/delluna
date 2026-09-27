export const name="skull-duotone";
export const id="dl_8dd4401b24a6b6bcf4b8";
export const url=new URL("../icons/skull-duotone.svg?v=d5520ee419abd5015b79ebdb3fa273e1bef8d74cf0b485c227027d9ad4ea5c41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
