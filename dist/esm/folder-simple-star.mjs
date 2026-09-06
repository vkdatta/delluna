export const name="folder-simple-star";
export const id="dl_85ad9cc81fd84f258190";
export const url=new URL("../icons/folder-simple-star.svg?v=7cf678bfd9a67424b773792a515057db1422e5cb911f332ad6ecbe27a0090668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
