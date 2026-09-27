export const name="swap_horizontal_circle-fill";
export const id="dl_3ad1cc8638a2627db56f";
export const url=new URL("../icons/swap_horizontal_circle-fill.svg?v=984a5f0286f06824703dbbc0affa99a48baea96adcac4dfd740f1f045f15bd8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
