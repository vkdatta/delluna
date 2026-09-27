export const name="sdk-fill";
export const id="dl_d4539f9ea477dd1da4ce";
export const url=new URL("../icons/sdk-fill.svg?v=c5cea95c047671698714f6ca756d5017f7c543d07a97b1bbbe4787f65ac8d84b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
