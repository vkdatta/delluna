export const name="no_business";
export const id="dl_89cd613f2ee9422b86e2";
export const url=new URL("../icons/all_60_named_svgs/no_business.svg?v=629bdcb83b584d9293edeba5509f87b7c39f3360447fcd2f8d3d695e2a7e63f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
