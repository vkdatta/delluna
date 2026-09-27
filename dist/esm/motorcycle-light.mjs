export const name="motorcycle-light";
export const id="dl_a0becece94b047229e35";
export const url=new URL("../icons/motorcycle-light.svg?v=eaf0becf858d5a4bbca22585b24ff858df46c194a981abf460eb94b218d9e8c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
