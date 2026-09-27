export const name="lucid_2-folder-closed";
export const id="dl_869289af8ff04af490c6";
export const url=new URL("../icons/lucid_2-folder-closed.svg?v=52cf2fc600d4fda78868a4a99332a71b85b787ba73a6955692bf9c11ad1d8053",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
