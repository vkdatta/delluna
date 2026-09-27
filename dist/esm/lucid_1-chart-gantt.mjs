export const name="lucid_1-chart-gantt";
export const id="dl_4043bf99afd14df98873";
export const url=new URL("../icons/lucid_1-chart-gantt.svg?v=9a717f7b88cbaea3bdcaa83b23d866f757b0554ab8fc5cc9c69ac197890818ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
