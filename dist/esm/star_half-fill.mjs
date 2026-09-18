export const name="star_half-fill";
export const id="dl_62afc11e3b4344d1bd95";
export const url=new URL("../icons/star_half-fill.svg?v=10d177ea52d9ffd887f0206db934601b8884e2a13a92e92abd0ec8460f28474e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
