export const name="lucid_1-cloud-off";
export const id="dl_b30b41120fe848129d36";
export const url=new URL("../icons/lucid_1-cloud-off.svg?v=f4d1b16779cd060a7ffb929e3ff080700a01a9af31d64529647de108275199b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
