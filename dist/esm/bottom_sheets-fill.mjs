export const name="bottom_sheets-fill";
export const id="dl_36b6603cea6cbcb203a1";
export const url=new URL("../icons/bottom_sheets-fill.svg?v=cfafb8a24a6f88faa32936b8447d5b0a9980554179985e1c97c7ea83daafdad3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
