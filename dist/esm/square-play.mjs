export const name="square-play";
export const id="dl_d2c0defc60124e2f8b35";
export const url=new URL("../icons/square-play.svg?v=66268f76352efc8cf5f891a0ae624585861c5a9328e25464b81c1e2d263a8f11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
