export const name="hurricane-fill";
export const id="dl_643818e01c7843a69aa0";
export const url=new URL("../icons/hurricane-fill.svg?v=8257762791e0ce80f76a984f5f6ac2d701e1b680f79d0898f68e727ba64a8e95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
