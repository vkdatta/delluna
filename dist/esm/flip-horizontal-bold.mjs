export const name="flip-horizontal-bold";
export const id="dl_c2ef463f4fb440e49d9a";
export const url=new URL("../icons/flip-horizontal-bold.svg?v=e8ae29f7df4296a0fad771effe8984afa4161303d2066b8fad1660cfe3732221",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
