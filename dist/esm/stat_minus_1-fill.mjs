export const name="stat_minus_1-fill";
export const id="dl_963da4d5f0d6dff4d3ad";
export const url=new URL("../icons/stat_minus_1-fill.svg?v=9c6edecf4e603ae10176d49f73edbd94be9bf6efbe60744f216eadb525abab4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
