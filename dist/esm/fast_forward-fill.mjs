export const name="fast_forward-fill";
export const id="dl_f0ed7eb9f6d84b78127e";
export const url=new URL("../icons/fast_forward-fill.svg?v=ab977701c2533eb7d0a4846d3425dc41fc930a54e65b5591309c8c06b871ecf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
