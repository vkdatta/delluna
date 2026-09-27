export const name="reduce_capacity-fill";
export const id="dl_f353738d0696c4b9648c";
export const url=new URL("../icons/reduce_capacity-fill.svg?v=ae33498e6cb6a70dfc3995cc8267f717296c830fb5246aa218ff1f21a99b0b6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
