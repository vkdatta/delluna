export const name="box-frame-cross";
export const id="dl_9165decdabd945f9bfe7";
export const url=new URL("../icons/close/box-frame-cross.svg?v=250c55e06d0dbe25429803bbfd3b3f42f72688c56000e73e9925e97758aef896",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
