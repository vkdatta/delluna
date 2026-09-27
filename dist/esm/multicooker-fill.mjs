export const name="multicooker-fill";
export const id="dl_40a166e6e536f18786f3";
export const url=new URL("../icons/multicooker-fill.svg?v=2e8d457b25a052ce8e653798fcd835a7a0021978da5acd0b51e5011473577b9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
