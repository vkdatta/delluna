export const name="priority_high";
export const id="dl_06fd28852c0b4a2991bc";
export const url=new URL("../icons/priority_high.svg?v=0ecfb921ce317b8f408bcbc37aef6dd963a9a4b43ceddfaa9b1023a9b26a7fc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
