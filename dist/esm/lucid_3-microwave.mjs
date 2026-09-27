export const name="lucid_3-microwave";
export const id="dl_fb9ae321575142fc9066";
export const url=new URL("../icons/lucid_3-microwave.svg?v=97c22147d3b2484927bf577c8b2e4b67ba75dd27102be510dde6650ceb99f3d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
