export const name="target-point";
export const id="dl_71505dadc057a0659bc3";
export const url=new URL("../icons/target-point.svg?v=e7662238b4c34b71a014df669c4303d85d90decf869ef78d92cc839b8922674b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
