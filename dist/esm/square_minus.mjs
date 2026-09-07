export const name="square_minus";
export const id="dl_6e72a4afbcc844538fb6";
export const url=new URL("../icons/all_60_named_svgs/square_minus.svg?v=74ba256d5c714081a4b1f0645d4ff00b7c0354020b536237ec51701e050a32aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
