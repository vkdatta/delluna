export const name="eyeglasses-fill";
export const id="dl_3246d5c9f07945a68156";
export const url=new URL("../icons/eyeglasses-fill.svg?v=020538fcc3017d508789c6dc99f081516fac0fa03958833ead35246f1525af73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
