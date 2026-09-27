export const name="lucid_2-folder-heart";
export const id="dl_1f4ecb58d6f34d62a8b9";
export const url=new URL("../icons/lucid_2-folder-heart.svg?v=c0c1c5764806c6c40636c046a103e6ff8876b1a43c6eae484c7b73dd5e9458b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
