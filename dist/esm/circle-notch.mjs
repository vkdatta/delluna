export const name="circle-notch";
export const id="dl_d83c52c28a5c4345959d";
export const url=new URL("../icons/circle-notch.svg?v=bed95a6f51a24bfa47b6fdda2f55d21e8da84bd40a32607cc8017fa142017242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
