export const name="lucid_3-panda";
export const id="dl_2a9d628d245b4e41ab91";
export const url=new URL("../icons/lucid_3-panda.svg?v=729e0d4524ac7726add2411332dd5e9d2a7cb65539ddbd9dfff0ec0676b3552b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
