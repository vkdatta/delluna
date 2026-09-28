export const name="tiktok-logo-thin";
export const id="dl_96c1ac2e00aebbe0813e";
export const url=new URL("../icons/tiktok-logo-thin.svg?v=d9a703b3764c87466370275abbc0317bd1585a0cfb3012089fb87cfdc9bb21a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
