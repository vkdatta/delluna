export const name="edit_document-fill";
export const id="dl_b55add361000413eb8f7";
export const url=new URL("../icons/E/edit_document-fill.svg?v=1aa896812e0210f9341f82aac3e31c4c3ae3370874935fe7d8c3a748ea0fe4ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
