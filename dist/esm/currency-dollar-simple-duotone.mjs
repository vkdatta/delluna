export const name="currency-dollar-simple-duotone";
export const id="dl_55cc32094c004043a59a";
export const url=new URL("../icons/currency-dollar-simple-duotone.svg?v=88dc1eaf641939d507932d969b0d7a039879620c81bfffd1d845da507fdfeb21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
