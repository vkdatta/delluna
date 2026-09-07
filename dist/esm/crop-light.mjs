export const name="crop-light";
export const id="dl_e7fcf729f94243f18485";
export const url=new URL("../icons/crop-light.svg?v=8105c9211aeee4cac8023f5b6b61b31e8876a726fe904e82b4c0418d289dcd8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
