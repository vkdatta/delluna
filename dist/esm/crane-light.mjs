export const name="crane-light";
export const id="dl_1cd430dbe83442c68845";
export const url=new URL("../icons/crane-light.svg?v=0c7f795f8921062c7758834c71dc16f2f7b6fe51bc2baf8a26d8d397cb6c163e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
