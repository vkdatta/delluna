export const name="graph_7-fill";
export const id="dl_850d80722f3f3231525d";
export const url=new URL("../icons/graph_7-fill.svg?v=7d260d33caa644bd07943683211b41ff3f150846f25fa453b3da0f1cec7ac881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
