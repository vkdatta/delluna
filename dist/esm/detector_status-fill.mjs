export const name="detector_status-fill";
export const id="dl_1bfd9714fbbe92011325";
export const url=new URL("../icons/detector_status-fill.svg?v=935813c47d878e41b543cc8d9b34c2597ead972f5e152c0d4f2d27b13565e6a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
