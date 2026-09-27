export const name="shuffle-angular-duotone";
export const id="dl_a714774cc02879af136a";
export const url=new URL("../icons/shuffle-angular-duotone.svg?v=2a0a227161273a354747972514dfca0d9ab5ddc2cf2735addc241056c4df5224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
