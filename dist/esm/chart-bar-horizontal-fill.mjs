export const name="chart-bar-horizontal-fill";
export const id="dl_0f8a1473923540329223";
export const url=new URL("../icons/chart-bar-horizontal-fill.svg?v=f3e5d65dde8d04e1bbb32f6e221756e6cc17e5064d4587bd1f6ea891ac10dc32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
