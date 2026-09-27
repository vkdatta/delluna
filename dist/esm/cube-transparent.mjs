export const name="cube-transparent";
export const id="dl_a4a5980ab15b429b9901";
export const url=new URL("../icons/cube-transparent.svg?v=c02f48ba20a1c1c691d2d85cc4fc3a99764f00659adc98cfed0e18f02c54a025",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
