export const name="lucid_2-gallery-thumbnails";
export const id="dl_944f53105f5c43f1b5df";
export const url=new URL("../icons/lucid_2-gallery-thumbnails.svg?v=491aab1809e3efc0051249a9bc5217b878569fd24eee7c854d8d9f4cac146e58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
