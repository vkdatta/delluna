export const name="globe-stand";
export const id="dl_b106e72d7b534ff59d5e";
export const url=new URL("../icons/globe-stand.svg?v=428ef7c5096b983fc5cf64420f47bb21cd02ea095f0b706e43210e6cd6f6ee07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
