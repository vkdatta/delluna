export const name="bubble_chart-fill";
export const id="dl_0fe8ccdc4db113b60eae";
export const url=new URL("../icons/bubble_chart-fill.svg?v=aea0115ffbd0a8b48e22d51ada9754fbe96dd38d7ac0ca428076950f5ebed761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
