export const name="hand-palm-fill";
export const id="dl_0c9f67a8f978480c9df7";
export const url=new URL("../icons/hand-palm-fill.svg?v=3522ea03b446cc223cb4cf2a19c9b9580fc9dcd07e47fc6f43f6aaa494a9d51c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
