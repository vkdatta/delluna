export const name="data_exploration";
export const id="dl_36c9f944cff59abe5f54";
export const url=new URL("../icons/data_exploration.svg?v=8883a3c6bd6dea6e6fe3a7723c9b3667291ffc83dcfdc80d857e98810b9cf322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
