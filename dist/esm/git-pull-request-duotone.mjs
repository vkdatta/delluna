export const name="git-pull-request-duotone";
export const id="dl_662c8819d4d04b55849a";
export const url=new URL("../icons/git-pull-request-duotone.svg?v=193e3d0e07bf7d386f0f66766ff4d6e6bfb75dcff9eab2c7e0c57f71b5ac66ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
