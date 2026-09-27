export const name="swatches-duotone";
export const id="dl_27e5d8c33d6e3e5dab45";
export const url=new URL("../icons/swatches-duotone.svg?v=0a51f563d48427edf05cbd52f35be0779c6cde5227f1af4c370ffab87b736573",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
