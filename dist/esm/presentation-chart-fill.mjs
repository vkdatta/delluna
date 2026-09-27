export const name="presentation-chart-fill";
export const id="dl_4340f56ad0cf4bb59eff";
export const url=new URL("../icons/presentation-chart-fill.svg?v=589690c02f13e7cad26168e4f3ad83061384764d22789316fbe95822e71cae0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
