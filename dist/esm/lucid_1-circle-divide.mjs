export const name="lucid_1-circle-divide";
export const id="dl_fabce23b1b794e1d926f";
export const url=new URL("../icons/lucid_1-circle-divide.svg?v=11965970fe0a235da63a1caf9655c3dc7c60af9793e3879915a32ddd39b35dc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
