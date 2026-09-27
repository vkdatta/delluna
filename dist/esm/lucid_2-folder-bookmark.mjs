export const name="lucid_2-folder-bookmark";
export const id="dl_d2ab403ad6dc4e008491";
export const url=new URL("../icons/lucid_2-folder-bookmark.svg?v=85ccdd23e13881ea9a6145efa5d07239b0480f9522e5e5470b8db9798f87cff7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
