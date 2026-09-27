export const name="heart-straight-thin";
export const id="dl_bcb1d89facce42968a65";
export const url=new URL("../icons/heart-straight-thin.svg?v=a4b6d48b725efd7805ebd9ab05836359561a1b7ac03897f6a8af19ea60696943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
