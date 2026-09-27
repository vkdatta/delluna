export const name="lucid_1-chart-pie";
export const id="dl_cc5eb0c894814a97b144";
export const url=new URL("../icons/lucid_1-chart-pie.svg?v=0e29d7b7dba16f5bf8cecc8783de9bf5447d112fea71961c75a6fe70083ed873",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
