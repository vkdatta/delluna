export const name="file-cloud-duotone";
export const id="dl_34021d70f16243399047";
export const url=new URL("../icons/file-cloud-duotone.svg?v=056bb6b9d8a2344ab2ed48e81ae317e983849833918fc685388910df5c03a8d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
