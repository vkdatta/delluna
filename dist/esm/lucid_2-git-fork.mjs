export const name="lucid_2-git-fork";
export const id="dl_ea81be62858348449361";
export const url=new URL("../icons/lucid_2-git-fork.svg?v=4e44924a8aa5aa7d3d4a9297c3757dc98d7b2c3af95f2d7d4ba51bed6b76bf67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
