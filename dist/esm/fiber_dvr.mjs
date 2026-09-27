export const name="fiber_dvr";
export const id="dl_6de54a1a8e43e25a537c";
export const url=new URL("../icons/fiber_dvr.svg?v=8bf976fee28b22541234d9e7de53507817f1612970d3aabb16e2c3393ed02081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
