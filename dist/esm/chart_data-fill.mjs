export const name="chart_data-fill";
export const id="dl_906734fc3f9944d581d8";
export const url=new URL("../icons/C/chart_data-fill.svg?v=060b307ca83d24629216f4eadd2a2a497b37d5b23009a6063240a513cab2924a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
