export const name="abc-fill";
export const id="dl_ab344726c7190e30cfb4";
export const url=new URL("../icons/abc-fill.svg?v=544a6320a0b8d2b99e9376f57990b7d474e5e317e7d8209d7400495cf8e3ac29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
