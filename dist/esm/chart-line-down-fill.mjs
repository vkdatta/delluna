export const name="chart-line-down-fill";
export const id="dl_2afe4490ee6f4a99aa4b";
export const url=new URL("../icons/chart-line-down-fill.svg?v=e551ebb56d27f0ae0c0cd8d41986063e41d57348a3ca4950d8b8cb09549d0107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
