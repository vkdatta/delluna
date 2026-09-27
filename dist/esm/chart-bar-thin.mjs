export const name="chart-bar-thin";
export const id="dl_2dbac4d400fe44759da2";
export const url=new URL("../icons/chart-bar-thin.svg?v=4f3d3fb3aafdbff9525e60a66b3bf1ffce80190e3b46eeff8d836761e2380e19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
