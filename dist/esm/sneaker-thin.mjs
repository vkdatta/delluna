export const name="sneaker-thin";
export const id="dl_b42397c7e5b0ad1c4dee";
export const url=new URL("../icons/sneaker-thin.svg?v=30045c72669a111284c5f36db17939cf9ea19007ab72c37ea0bd4f0830e851e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
