export const name="git-fork-light";
export const id="dl_6975c780cd6646fb91b5";
export const url=new URL("../icons/git-fork-light.svg?v=a10d2cb047d902a14b9d3ea16413a0842fbeb429bdbf75f14ce1775a2cd38b0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
