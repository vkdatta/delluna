export const name="intersect-square";
export const id="dl_e8a461fcbf234d81af51";
export const url=new URL("../icons/intersect-square.svg?v=330de5414e49c5e58ae4bb49ac1e1c4c5590ea826c5722e21b9d0546a87222e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
