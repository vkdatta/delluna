export const name="lucid_1-boom-box";
export const id="dl_b76318ff36414d7a8d3b";
export const url=new URL("../icons/lucid_1-boom-box.svg?v=4521efeaa51325a010448bd91100f15b3b0e650d9e60a477a81a3332f0f745bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
