export const name="grains-slash-duotone";
export const id="dl_77e51f9ac2b7459f90a6";
export const url=new URL("../icons/grains-slash-duotone.svg?v=35d7c08a6ec87ed590d9f80671ee731856f70c6d6ea8bf64989a98623a38c3de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
