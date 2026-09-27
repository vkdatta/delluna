export const name="zap-off";
export const id="dl_a0923715994a4b39aa67";
export const url=new URL("../icons/zap-off.svg?v=d869849440b52e537f9e8ebf448e86e8dec2afc3709b3cdd1a2de3f39e31126c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
