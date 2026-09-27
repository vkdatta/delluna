export const name="number-square-eight-fill";
export const id="dl_5985f729856449199643";
export const url=new URL("../icons/number-square-eight-fill.svg?v=9bdd3e15059aec0df301a68b5170e378e8eb0fa81c2b0f2902a2cffa636d7a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
