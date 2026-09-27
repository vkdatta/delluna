export const name="deployed_code";
export const id="dl_816bf19ed5bbc212d418";
export const url=new URL("../icons/deployed_code.svg?v=f23390bd6dc36842a519b366fba3ed457a593f0790b2f8d49c92924ccea7d114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
