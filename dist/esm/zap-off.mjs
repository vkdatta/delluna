export const name="zap-off";
export const id="dl_a0923715994a4b39aa67";
export const url=new URL("../icons/zap-off.svg?v=2c9eb944e605d6f0b34be373f933d068fad7677021c96b2b46080a90c101e325",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
