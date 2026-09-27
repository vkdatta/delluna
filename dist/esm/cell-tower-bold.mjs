export const name="cell-tower-bold";
export const id="dl_f3f22a8c2bc643488e8e";
export const url=new URL("../icons/cell-tower-bold.svg?v=a938f8d5c2d2ff392e07267a160ed984fd7ef67ec0e805ec5a42f231222cab5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
