export const name="lucid_2-folder-sync";
export const id="dl_9cefcf8d401b4731a43f";
export const url=new URL("../icons/lucid_2-folder-sync.svg?v=62fa9a20abcd1a6f0c318f33484aa37637632f5438c9e4c7b6cd8cd5066e548a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
