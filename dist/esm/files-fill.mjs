export const name="files-fill";
export const id="dl_c810c258f6b0408a9923";
export const url=new URL("../icons/files-fill.svg?v=e9d3f1155c44ed7a64791d8c4e98fa0929ddcf9322f26b81ec0f66e70962162a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
