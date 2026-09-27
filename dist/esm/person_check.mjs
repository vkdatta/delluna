export const name="person_check";
export const id="dl_da10d686dea21a20917e";
export const url=new URL("../icons/person_check.svg?v=376f0c125f634048fe704274aaf21b609f8ffb7b2abb6b928095461fe74ffa82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
