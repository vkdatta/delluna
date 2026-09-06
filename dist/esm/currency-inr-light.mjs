export const name="currency-inr-light";
export const id="dl_7134a856286143f79f7f";
export const url=new URL("../icons/currency-inr-light.svg?v=df967ea5aa107d145298ff9aeadb01223aac81754dacaabbc5278da3cf8f2558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
