export const name="folder_data";
export const id="dl_56546ef31ddc9f7ed5f9";
export const url=new URL("../icons/folder_data.svg?v=6056e09153f372f7097b8f7999db67c08516d44fcba6e158b927481e7aa8f512",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
