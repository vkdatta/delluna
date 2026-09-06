export const name="hand-fist-fill";
export const id="dl_2593ca2598a7470b8d1e";
export const url=new URL("../icons/hand-fist-fill.svg?v=e5ef1fff06f73ad84bb9d19ac7a9286dad07566366cec98be7a987757c44932e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
