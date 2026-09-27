export const name="lock-laminated-light";
export const id="dl_abeaea034daa42c6921b";
export const url=new URL("../icons/lock-laminated-light.svg?v=9f5a891eab90ba4b12e71d91dc5efb2434661e6b69c66501836c8c2d40d3545b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
