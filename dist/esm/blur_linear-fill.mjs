export const name="blur_linear-fill";
export const id="dl_9b89c414b6eae99c7237";
export const url=new URL("../icons/blur_linear-fill.svg?v=29a7dafea481e8206c60955b026b568aac7b43cd354b8a3d199fb7c3b958ea13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
