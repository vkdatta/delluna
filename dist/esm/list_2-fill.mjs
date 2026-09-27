export const name="list_2-fill";
export const id="dl_bbfb9521af110b98beee";
export const url=new URL("../icons/list_2-fill.svg?v=d3e46641819daa4a2a6db292a404d2b254a0369aa152a4c2926c67f205e10594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
