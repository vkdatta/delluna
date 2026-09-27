export const name="box";
export const id="dl_25458114d5f9d86aa6e1";
export const url=new URL("../icons/box.svg?v=a31daa014d2d108db4068633682a00bee75d514fdacd951553bd5133b0686220",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
