export const name="lucid_2-gallery-thumbnails";
export const id="dl_944f53105f5c43f1b5df";
export const url=new URL("../icons/lucid_2-gallery-thumbnails.svg?v=5d13e08c02bad8df55eec831e563a3a5ef9427deebf6c5484257c86e1df9742f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
