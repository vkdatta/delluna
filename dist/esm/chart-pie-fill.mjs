export const name="chart-pie-fill";
export const id="dl_56d3c7a27c994b44aad5";
export const url=new URL("../icons/chart-pie-fill.svg?v=845f785bef4db881a3916777b335d875cfdb7d7d8e4a8b3910664b1ce67f6a5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
