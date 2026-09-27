export const name="less-than-fill";
export const id="dl_8af032ebf6f84892ad21";
export const url=new URL("../icons/less-than-fill.svg?v=3f753b89736b7a8efc7c8546107ad9374551029f33ac0554c6cff0dc366a2615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
