export const name="lucid_2-italic";
export const id="dl_566c884ca6534c8183c5";
export const url=new URL("../icons/lucid_2-italic.svg?v=10995620a93536b22791809ee5d1f57aff950ed54197da7e937f0126cfe1ec5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
