export const name="speedometer-bold";
export const id="dl_aae738cc207402bd2ac5";
export const url=new URL("../icons/speedometer-bold.svg?v=0891db9aa8efb928986b8f56432e7739a2264fca404fd377c524c1ef3527f6af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
