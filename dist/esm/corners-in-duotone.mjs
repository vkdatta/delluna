export const name="corners-in-duotone";
export const id="dl_52d8762e330945cda53f";
export const url=new URL("../icons/corners-in-duotone.svg?v=fce45168a4d2ea09881275821d777c3edcdde74b305e480c47444150d769147f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
