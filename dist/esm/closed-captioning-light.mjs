export const name="closed-captioning-light";
export const id="dl_ff44a8bcacd74fe5af61";
export const url=new URL("../icons/closed-captioning-light.svg?v=d72ef9f36131760a5558eb78daed722d3c59904d1211caf6e713ffd811065ffe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
