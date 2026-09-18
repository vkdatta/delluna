export const name="data_table-fill";
export const id="dl_b6ef091da0a14effa972";
export const url=new URL("../icons/data_table-fill.svg?v=974cddecb96e69cb1336fb3b2ca7a242705cfac0eecb0d568f7b90f00caa5585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
