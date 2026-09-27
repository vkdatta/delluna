export const name="post-fill";
export const id="dl_eac190558839ae30f15b";
export const url=new URL("../icons/post-fill.svg?v=9c903faaa5a8bdcc1aedfa5756c4a025356a8f41c2657be4864e84c0a14f0fb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
