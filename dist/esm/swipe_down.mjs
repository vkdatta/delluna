export const name="swipe_down";
export const id="dl_a1200ba5b5a482374098";
export const url=new URL("../icons/swipe_down.svg?v=242fbfda3a0515d25077fc2e07ace70f5edfb3a9214d8cde10f5af023d2d3617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
