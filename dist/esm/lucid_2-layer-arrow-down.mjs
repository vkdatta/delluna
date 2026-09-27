export const name="lucid_2-layer-arrow-down";
export const id="dl_282f37409e9b4834bb26";
export const url=new URL("../icons/lucid_2-layer-arrow-down.svg?v=ec5c023be902322ef7d58e407ebbd93a38ffb4aad247ce823713f9e0bd578997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
