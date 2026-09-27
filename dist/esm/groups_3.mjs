export const name="groups_3";
export const id="dl_e668c690695006720b22";
export const url=new URL("../icons/groups_3.svg?v=59c46e6ef0a9e69edcd6701448a07e24c4fc9a0a1389b13127c388bbf4a4e322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
