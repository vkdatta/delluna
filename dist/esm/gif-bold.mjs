export const name="gif-bold";
export const id="dl_5820332f3b9046d59f15";
export const url=new URL("../icons/gif-bold.svg?v=20716544211a9211263e4b0cf135740d6621bef086f1aaae4c77545b115bbf2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
