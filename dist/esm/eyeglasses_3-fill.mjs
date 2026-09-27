export const name="eyeglasses_3-fill";
export const id="dl_b9274931a6d14708eea3";
export const url=new URL("../icons/eyeglasses_3-fill.svg?v=ea51c7356ea2efa0181950ad2672b2c6b24856c80fc24521d2e68badb681b24d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
