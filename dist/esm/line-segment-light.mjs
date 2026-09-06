export const name="line-segment-light";
export const id="dl_0889f8d778c449fab5bb";
export const url=new URL("../icons/line-segment-light.svg?v=569bfafcded688a61de2e847366184c6c504bb198128019e16bb33b8c5af3de8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
