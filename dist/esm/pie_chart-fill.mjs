export const name="pie_chart-fill";
export const id="dl_f2ae74cbc6da4c4dbec9";
export const url=new URL("../icons/pie_chart-fill.svg?v=337085d52ab4cbe8d56b31f8983632b0765a9f8d86fab783d7a33f6f7476c2e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
