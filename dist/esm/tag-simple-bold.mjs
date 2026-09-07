export const name="tag-simple-bold";
export const id="dl_fb21d89b73964b738329";
export const url=new URL("../icons/T/tag-simple-bold.svg?v=b91e0d131b862100d00012b4cb8c33fc610f768d350c40f9a4a7be9739a92aa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
