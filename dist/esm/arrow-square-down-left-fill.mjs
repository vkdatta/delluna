export const name="arrow-square-down-left-fill";
export const id="dl_88bb6701031a4237a1ff";
export const url=new URL("../icons/arrow-square-down-left-fill.svg?v=000259ac6108f498a12ecda79b8d30f4524232ff5703c797de572994f1b036f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
