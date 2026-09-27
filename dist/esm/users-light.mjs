export const name="users-light";
export const id="dl_c5dfeab53d6cbd739011";
export const url=new URL("../icons/users-light.svg?v=9066bef81b4ee8dbf91a6cd8d19e2f5b534faccde85881818bbe5aa17a04abf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
