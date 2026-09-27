export const name="less-than-fill";
export const id="dl_8af032ebf6f84892ad21";
export const url=new URL("../icons/less-than-fill.svg?v=65fb0cdfdaae7453a801b635fb94e5fe477ff2fb0a029b3730a7f276411bfd2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
