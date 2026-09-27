export const name="lucid_1-chart-gantt";
export const id="dl_4043bf99afd14df98873";
export const url=new URL("../icons/lucid_1-chart-gantt.svg?v=65d989dfc219259ee3b5cee12c5b29aa1dcfb085ea16b2f86fcce20b75fb8eb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
