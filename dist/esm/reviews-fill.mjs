export const name="reviews-fill";
export const id="dl_f5ef1bb3d3e0f57679d1";
export const url=new URL("../icons/reviews-fill.svg?v=e068c0648f962f17c0a190b125c5376a75a6d07d83d4009f6c3ea6c0191fad91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
