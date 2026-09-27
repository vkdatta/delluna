export const name="currency-gbp-duotone";
export const id="dl_c5a3bb9400ba47d19926";
export const url=new URL("../icons/currency-gbp-duotone.svg?v=413460dbf2a6f6ede595c7fe17d262f240eedf904f7593904f7798bf5370eff3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
