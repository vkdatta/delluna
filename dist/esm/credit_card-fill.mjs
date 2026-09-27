export const name="credit_card-fill";
export const id="dl_4608619626dfa3771f9b";
export const url=new URL("../icons/credit_card-fill.svg?v=f8e8989612e9ebe58bead44257ec1dc9c555a0d2dd806f3926e5b2be19393688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
