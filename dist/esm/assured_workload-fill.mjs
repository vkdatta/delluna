export const name="assured_workload-fill";
export const id="dl_59f68eda8f793ee7f992";
export const url=new URL("../icons/assured_workload-fill.svg?v=9b889e91427a596d59d3ef7bdb2ba492c3de77e5b792427e533222110c60c7db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
