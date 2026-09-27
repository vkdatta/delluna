export const name="wifi-high-light";
export const id="dl_eb444772301199cf0ddc";
export const url=new URL("../icons/wifi-high-light.svg?v=9e80d47791ab2f0a183d3e22427396a7d65f788ac398be1ca41cafa99d552cb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
