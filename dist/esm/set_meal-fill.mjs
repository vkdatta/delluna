export const name="set_meal-fill";
export const id="dl_de48004705696c410e59";
export const url=new URL("../icons/set_meal-fill.svg?v=33a281e0d815df5e7e7d3e355a8568fac8810847d5e1e9529ce9060d3482df7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
