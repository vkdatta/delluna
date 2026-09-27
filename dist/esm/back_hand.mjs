export const name="back_hand";
export const id="dl_a6780bc0d3e36dd4aec3";
export const url=new URL("../icons/back_hand.svg?v=5d73b41f9fbe314fa6de7bdfd9cfa67ae6173abc3fa9ddaa657ffc7838382a72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
