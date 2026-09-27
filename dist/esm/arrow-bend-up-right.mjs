export const name="arrow-bend-up-right";
export const id="dl_daf69dc717f14490ab2e";
export const url=new URL("../icons/arrow-bend-up-right.svg?v=103d49dfdea457ad7779cb0e1b98f7c68c12507bd83bb79d01fe6c6c461aecee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
