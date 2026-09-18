export const name="position_top_right";
export const id="dl_459336af812542f49bdc";
export const url=new URL("../icons/P/position_top_right.svg?v=3b401a01198f68bcae42c0daba29963f7062a040769638b5c31f3de7f18f1f59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
