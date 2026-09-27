export const name="hand-fill";
export const id="dl_1e3036b877974103b5de";
export const url=new URL("../icons/hand-fill.svg?v=16559d9b32457d621c223d8539194dd4e3b03ba138a5abcdd7a6e39d18b7f489",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
