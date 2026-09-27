export const name="list-plus-duotone";
export const id="dl_417aa126f11449fba081";
export const url=new URL("../icons/list-plus-duotone.svg?v=636c7b99f63b5e7fa8d8dd1cd0da9130f30e627069db3943a556d3d69651bd23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
