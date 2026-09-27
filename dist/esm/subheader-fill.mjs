export const name="subheader-fill";
export const id="dl_2fea3d8172d95788ebb1";
export const url=new URL("../icons/subheader-fill.svg?v=408c31d0b57824b5d34c5594048706e2c9cbb883e3a9df06208745950a6a2298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
