export const name="orange";
export const id="dl_782c769afb2d4d7283a0";
export const url=new URL("../icons/orange.svg?v=578012ab57bb77c882faf624f76b94310efe92a2558f726a45b0c1115bee5e78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
