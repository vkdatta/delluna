export const name="tree-duotone";
export const id="dl_a35d16226fd62d3b40d5";
export const url=new URL("../icons/tree-duotone.svg?v=a01bb5a36f00c0f8f04b6a40fbf127570d0a091561dd721a663f4796eb771eb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
