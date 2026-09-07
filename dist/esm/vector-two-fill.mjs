export const name="vector-two-fill";
export const id="dl_3d6d6a84a9ad4b098997";
export const url=new URL("../icons/V/vector-two-fill.svg?v=52008377bf542e8c635900a7e218f7e52096da16590ea9223789d102fbfbaca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
