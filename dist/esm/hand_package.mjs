export const name="hand_package";
export const id="dl_d17f43b2fc372625d3a5";
export const url=new URL("../icons/hand_package.svg?v=c78346212c1e99a77231b742831bfeac9a2530d249ae78c15ac7de52fbf7af64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
