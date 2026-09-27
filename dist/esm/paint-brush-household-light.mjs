export const name="paint-brush-household-light";
export const id="dl_ac92ea2dd45a4a92b47a";
export const url=new URL("../icons/paint-brush-household-light.svg?v=6e655c40539c78cc3d0ff7446036ae66a2afa5f89f3f8d734a0c5e8f88861d2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
