export const name="chart-line-bold";
export const id="dl_b98ddf864e504461ba98";
export const url=new URL("../icons/chart-line-bold.svg?v=22c7de31c0faf3cff0af4776c42a8da65cab47d4f32d5881619572c6e78bbbcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
