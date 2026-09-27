export const name="bookmark_add-fill";
export const id="dl_3d9e5ee8be88355f3d0c";
export const url=new URL("../icons/bookmark_add-fill.svg?v=b0f5489334dc4d7d1f4666723a7769b35061e1b76612d6953951c4be874a81ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
