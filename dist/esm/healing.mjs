export const name="healing";
export const id="dl_bd35fc114d1d7cab6270";
export const url=new URL("../icons/healing.svg?v=a4ecd31d6bf8f948f10976597a2b99d2a070472bebb0c24178f81b3596d74d8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
