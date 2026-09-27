export const name="dots-three-circle";
export const id="dl_31e0b5239644432fbb85";
export const url=new URL("../icons/dots-three-circle.svg?v=bb2791f71461906067bfb0e2cf15732c5df2d6810b9eadc82d6c3adccbdb3dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
