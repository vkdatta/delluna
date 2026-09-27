export const name="battery-vertical-medium-light";
export const id="dl_0a2f4670b29244678674";
export const url=new URL("../icons/battery-vertical-medium-light.svg?v=50ba9e6e1f9406f6370184f2352de36e7fa29cfbaf790877b3a933030bd64712",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
