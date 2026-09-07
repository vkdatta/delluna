export const name="tiktok-logo-thin";
export const id="dl_4c629dc6fa1a4aa3a1f3";
export const url=new URL("../icons/T/tiktok-logo-thin.svg?v=d9a703b3764c87466370275abbc0317bd1585a0cfb3012089fb87cfdc9bb21a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
