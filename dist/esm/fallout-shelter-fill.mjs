export const name="fallout-shelter-fill";
export const id="dl_18534b2c971a4efcb0fb";
export const url=new URL("../icons/fallout-shelter-fill.svg?v=52bbdf31f5d5c21cac5d9e0853c4b588f8ab7efaecb354e5890763ced5549859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
