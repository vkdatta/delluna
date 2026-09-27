export const name="tree-view-thin";
export const id="dl_ce26d5ca2eee5254d20b";
export const url=new URL("../icons/tree-view-thin.svg?v=8ba5e613839b54e122e41a312a9744c2fffb14e9149e8944f078bf3c6499a89e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
