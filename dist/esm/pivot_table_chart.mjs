export const name="pivot_table_chart";
export const id="dl_ccb03426c45205e7eb36";
export const url=new URL("../icons/pivot_table_chart.svg?v=77f7e8389010f9fcacfd8bb433f1a593bc15f93a81ffb8418d88677f626f81cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
