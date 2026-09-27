export const name="bank";
export const id="dl_8c8f39448b9d497dbb06";
export const url=new URL("../icons/bank.svg?v=a11db7d0617c0d99dcd4c9a0f5f667facfa47d770198df5a9668ce93172b391d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
