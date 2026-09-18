export const name="water_full";
export const id="dl_dd82ec04b4ec4422b901";
export const url=new URL("../icons/W/water_full.svg?v=f71de0d9d7bbc4c63981f6e9479c9d1671feceafa383d2422daf6895011cfe7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
