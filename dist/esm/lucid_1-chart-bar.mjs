export const name="lucid_1-chart-bar";
export const id="dl_287bd184d9504a00bc93";
export const url=new URL("../icons/lucid_1-chart-bar.svg?v=6155c8acf91b902e17d8554e2d9034d01a1cc42c4368fa8c84e4d501c1f33f39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
