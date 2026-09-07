export const name="steering-wheel-fill";
export const id="dl_7171b47aabda46b4ab77";
export const url=new URL("../icons/S/steering-wheel-fill.svg?v=2971651312dac31e1c738020200c044790a8e5e70fa7d5e61956756f298c1ffc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
