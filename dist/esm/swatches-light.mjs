export const name="swatches-light";
export const id="dl_03dceea3bf5c9a1ba841";
export const url=new URL("../icons/swatches-light.svg?v=f37f7820e789c0bedfb51e1603343071545a3095608368239713f499739b6bdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
