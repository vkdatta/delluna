export const name="list-plus-duotone";
export const id="dl_417aa126f11449fba081";
export const url=new URL("../icons/list-plus-duotone.svg?v=f92d5df0e4fd741c9953041961afbe9f697506db57b93311ab7d1195bcaabfba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
