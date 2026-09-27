export const name="vertical_distribute-fill";
export const id="dl_6122049a2291fc9a26d5";
export const url=new URL("../icons/vertical_distribute-fill.svg?v=fe41ea9eaf403af994b1d759735191041397dc7771a884c4cc05050fa6813301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
