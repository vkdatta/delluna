export const name="add_ad";
export const id="dl_ba94dfc0bbef96a676ee";
export const url=new URL("../icons/add_ad.svg?v=18f81b6f90e86494a63f48588b216618dbdd89c26ae74e8afc8ec6105d460d5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
