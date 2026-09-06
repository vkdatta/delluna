export const name="image-square-light";
export const id="dl_1250f4bb1e9b44cfbd82";
export const url=new URL("../icons/image-square-light.svg?v=0719ad09880b8c9b54ba5406c12c47fdcb8fe8ff40785053e98140d332bdafcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
