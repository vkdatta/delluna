export const name="keyboard_off-fill";
export const id="dl_8826e4f14896daa1f5e0";
export const url=new URL("../icons/keyboard_off-fill.svg?v=7d649d7b4853a68c671c8f7321284f859c6d3c581fe754f3f13ce8c6cb3d58f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
