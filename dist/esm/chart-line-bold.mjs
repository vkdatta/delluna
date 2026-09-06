export const name="chart-line-bold";
export const id="dl_b98ddf864e504461ba98";
export const url=new URL("../icons/chart-line-bold.svg?v=ffff5add2c0384a6e4e2f661fd3784c4facfdc9d8bfe98d8467d710a6261b29c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
