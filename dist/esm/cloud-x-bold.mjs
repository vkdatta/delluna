export const name="cloud-x-bold";
export const id="dl_1a985b2886874fcdab9d";
export const url=new URL("../icons/cloud-x-bold.svg?v=dc141cb4ea8105edd11d9525d4c75012075e3f1050d3eb270321ae3c3941471c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
