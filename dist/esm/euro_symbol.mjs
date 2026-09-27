export const name="euro_symbol";
export const id="dl_78cde85325a3aae4e490";
export const url=new URL("../icons/euro_symbol.svg?v=e3dca52a3176d6bdd87feb6797d724f8c862454725c11d54e0ce8866ddb88c73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
