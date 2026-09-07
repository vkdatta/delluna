export const name="lock-laminated-light";
export const id="dl_abeaea034daa42c6921b";
export const url=new URL("../icons/lock-laminated-light.svg?v=b66acd4e145c7ce62c093b488b1f6e024a3616bd7eec48aade644b6a5275cd7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
