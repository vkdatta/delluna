export const name="pageless-fill";
export const id="dl_685a464f3f5f1b71f8f4";
export const url=new URL("../icons/pageless-fill.svg?v=21357ecce916e50826eff7b242653217cfbb781bdd287cd53e3169d6c644ea0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
