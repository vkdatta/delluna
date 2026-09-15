export const name="copy_all";
export const id="dl_f1304692b95849f19210";
export const url=new URL("../icons/C/copy_all.svg?v=4e8c95ea8e2456ade303f4e5122ab1835423dfdc2ce3181feb9a755eea530e5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
