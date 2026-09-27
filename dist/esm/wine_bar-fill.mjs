export const name="wine_bar-fill";
export const id="dl_438580a27c769b4a2bd8";
export const url=new URL("../icons/wine_bar-fill.svg?v=b5029246f19175e8e8b4274053d92f2478d687d545fddf6657e51c28f5709990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
