export const name="git-fork-bold";
export const id="dl_ab2c2633a02a43fbb002";
export const url=new URL("../icons/git-fork-bold.svg?v=1674b6d49ebaf0611f530063c3ffec730753b31e39d92279d4361681ea6c6d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
