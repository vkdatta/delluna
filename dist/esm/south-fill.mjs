export const name="south-fill";
export const id="dl_502853fbb9cd5b0e3d8b";
export const url=new URL("../icons/south-fill.svg?v=4f2c330d87a0a56bef790615e13df2802523c3cc130becefdddc2f488ebc118c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
