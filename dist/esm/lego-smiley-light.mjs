export const name="lego-smiley-light";
export const id="dl_002ca19cb1f94e8586eb";
export const url=new URL("../icons/lego-smiley-light.svg?v=7b3b2aaff5d736e22e7c3a5caec3aaeb3d1e17316a6e6d9ad1d886a7b3c210a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
