export const name="lucid_1-chart-bar-big";
export const id="dl_c49b44f05d314ec78a9f";
export const url=new URL("../icons/lucid_1-chart-bar-big.svg?v=2dfcd66e6967220027c75430c1d6e983a1dec661af6b118bb80061573d18522a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
