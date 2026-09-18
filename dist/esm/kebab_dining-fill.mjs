export const name="kebab_dining-fill";
export const id="dl_6322d3e5528c459c8734";
export const url=new URL("../icons/K/kebab_dining-fill.svg?v=7c8abea9573ab2e02e18e5e5ddb9c3962e009793354fb85ba77e34aa530183f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
