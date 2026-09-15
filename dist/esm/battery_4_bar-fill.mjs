export const name="battery_4_bar-fill";
export const id="dl_dbfde4b1209c4b7e99f0";
export const url=new URL("../icons/B/battery_4_bar-fill.svg?v=14d7c80bec5e9d19185f8bdfb072881272cb62d77cfbf254bffea0261bf96097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
