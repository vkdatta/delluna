export const name="dress-fill";
export const id="dl_8d1590802a3d405c8ae9";
export const url=new URL("../icons/dress-fill.svg?v=2f9253c5910629744c209cc841ed27a383a58fb64f49df203cede7680a583a81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
