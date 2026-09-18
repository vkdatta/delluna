export const name="eyeglasses_2";
export const id="dl_de621d0624ce4272a68b";
export const url=new URL("../icons/eyeglasses_2.svg?v=ffa9ad4a602ab735ffc43e347d9fc1ce39da15b4597af616d81eb900fd432f8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
