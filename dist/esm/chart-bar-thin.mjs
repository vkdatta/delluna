export const name="chart-bar-thin";
export const id="dl_2dbac4d400fe44759da2";
export const url=new URL("../icons/chart-bar-thin.svg?v=7b2c3f711fc588c7fcdb30d0671226a1f5011cb0ac01fcd38e37cf8a60e3fe26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
