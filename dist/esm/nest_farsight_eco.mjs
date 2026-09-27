export const name="nest_farsight_eco";
export const id="dl_587049d9c67b49c98bef";
export const url=new URL("../icons/nest_farsight_eco.svg?v=7980dbd98dbe3f1f68deae425e4c749be6dceef67ee5751c295fb1977803e63d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
