export const name="graphics-card-duotone";
export const id="dl_869770e81c7b4659af45";
export const url=new URL("../icons/graphics-card-duotone.svg?v=843fac2142a8bb3db9a118d9a660c1d07db776d99af4aa520a126e6c553aee88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
