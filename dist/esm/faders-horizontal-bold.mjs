export const name="faders-horizontal-bold";
export const id="dl_ab3d6953b92a4d459f8d";
export const url=new URL("../icons/faders-horizontal-bold.svg?v=cae59b8f15d0de88be4ab675cf974e2a6a310348b67cf00a3448532771932922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
