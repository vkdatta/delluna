export const name="rate_review";
export const id="dl_49b90832b44a488aa967";
export const url=new URL("../icons/rate_review.svg?v=6f9dca423ff38717487c2d986dd209a003f737e4046ca481937bdc416fb76b19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
