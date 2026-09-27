export const name="radical-duotone";
export const id="dl_10b28ddfcda7430e8924";
export const url=new URL("../icons/radical-duotone.svg?v=19f81d663e5e144b462201e19289224d62b872e46a941bf27d5478d5a288403b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
