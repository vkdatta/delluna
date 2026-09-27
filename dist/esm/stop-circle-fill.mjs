export const name="stop-circle-fill";
export const id="dl_a82639991b44716e392c";
export const url=new URL("../icons/stop-circle-fill.svg?v=63a93aaa292ed3341f0ccb3d2a5bdba4072f657b32be46fe8085c77e4bba060f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
