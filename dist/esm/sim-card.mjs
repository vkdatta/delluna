export const name="sim-card";
export const id="dl_b31343484936404aaa36";
export const url=new URL("../icons/S/sim-card.svg?v=4efcce89330bdf9e176d81a6a12d6a072e6bf1f7c4975cb4a0d6e847965df559",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
