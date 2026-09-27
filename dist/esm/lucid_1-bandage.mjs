export const name="lucid_1-bandage";
export const id="dl_225203fad7374780bbbc";
export const url=new URL("../icons/lucid_1-bandage.svg?v=5fa00e38b0455e9de2218f2774072a9d5a153ce485cf351f950dc4cf8a069314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
