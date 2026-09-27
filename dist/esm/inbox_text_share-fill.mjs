export const name="inbox_text_share-fill";
export const id="dl_741c6fbf80ce5b3d9d10";
export const url=new URL("../icons/inbox_text_share-fill.svg?v=cad08d481cf87ae98cba57a5b2414d120a3722b732830a85056eddfab230ba43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
