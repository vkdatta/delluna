export const name="tree-structure-light";
export const id="dl_09cbcf318999d06f454f";
export const url=new URL("../icons/tree-structure-light.svg?v=51f23b2f1e608e634e8f025ad92088d7048641a70bf626a8c6605b3e85403f1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
