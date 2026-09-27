export const name="sort-descending-light";
export const id="dl_4de3570e8ce095832ffd";
export const url=new URL("../icons/sort-descending-light.svg?v=ae5b030caa3e1b5ac7e4f8c3d614fe575075a8c1afb876c55df6dd7218d78bee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
