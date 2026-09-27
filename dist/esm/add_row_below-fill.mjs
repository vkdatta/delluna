export const name="add_row_below-fill";
export const id="dl_dffaa4357257533fa4e7";
export const url=new URL("../icons/add_row_below-fill.svg?v=f923d2022c05463225d2e51d1a5234cb73ced84ac0e010641d841b5f1f8de142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
