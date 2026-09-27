export const name="arrow-fat-left-bold";
export const id="dl_e3143c3ef05c4e5c93c5";
export const url=new URL("../icons/arrow-fat-left-bold.svg?v=f9e2a90a0e10fbea3a12de5892e5f3b42d48addd790dca1e8ab78b8c8a162179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
