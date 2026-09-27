export const name="border_all";
export const id="dl_3b4a8cb7f6865f726483";
export const url=new URL("../icons/border_all.svg?v=5eb3d67ffee58f58158c75991c421a5dc635dfd7f7583d5d42bec26d1011aa56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
