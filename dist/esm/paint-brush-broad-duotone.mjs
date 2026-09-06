export const name="paint-brush-broad-duotone";
export const id="dl_edde7471edb14cfb9e2a";
export const url=new URL("../icons/paint-brush-broad-duotone.svg?v=d5e4f5e7c6104d222cafe5ce554cabc08027b21f3764c594411585fc54ff2ebd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
