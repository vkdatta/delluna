export const name="chart-polar";
export const id="dl_6eb8e245a3ae46b19c1a";
export const url=new URL("../icons/chart-polar.svg?v=2c69e7353523ed840456c9625db7518638452c4b1c793b2526adfe3c22ff5188",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
