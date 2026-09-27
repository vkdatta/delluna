export const name="zap-off";
export const id="dl_a0923715994a4b39aa67";
export const url=new URL("../icons/zap-off.svg?v=6c8764e88dd3642ef2e3929c5ee04b59d8ba3f97c2de37ee3e03825c08e8262c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
