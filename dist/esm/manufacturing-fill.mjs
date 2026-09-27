export const name="manufacturing-fill";
export const id="dl_ab0c509d2399b6db33f5";
export const url=new URL("../icons/manufacturing-fill.svg?v=77f750c254577643ac2d12788420ec98add80190f3c85b31b5dacf94cb6919f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
