export const name="hotel";
export const id="dl_b269b7a8af3d3da1f0d0";
export const url=new URL("../icons/hotel.svg?v=4d3421f0eba136fc077e07a75438dd86cdaa7d3fd90f3128d58e89bc6eba94a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
