export const name="bar_chart";
export const id="dl_46180b3fe6fe86a33df4";
export const url=new URL("../icons/material_symbols/bar_chart.svg?v=45a13581e6196dc249e2aff8f5197b231eab77063913671d62b755deed8a7c64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
