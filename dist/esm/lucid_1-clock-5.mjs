export const name="lucid_1-clock-5";
export const id="dl_e542410c6cbf467b873e";
export const url=new URL("../icons/lucid_1-clock-5.svg?v=a7b7fafa6a89c7dc19863adc5dc518ba41f743bc83961498ba333e07e88a817c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
