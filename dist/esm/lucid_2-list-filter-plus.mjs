export const name="lucid_2-list-filter-plus";
export const id="dl_e080cbea710741eb90cc";
export const url=new URL("../icons/lucid_2-list-filter-plus.svg?v=e7b956680e946a848d1ed6f5c37cd4481e8075a2eba895ceb596b800b22cc0f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
