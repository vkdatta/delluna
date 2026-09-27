export const name="hospital-light";
export const id="dl_a6dbfd03a2e64aa9a4ba";
export const url=new URL("../icons/hospital-light.svg?v=e2d56a33adfae2c502e1be5973b7d05c739f301c8ed98537fed38740ed2a07cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
