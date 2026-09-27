export const name="shirt-folded-bold";
export const id="dl_fa86549fef1fff847afe";
export const url=new URL("../icons/shirt-folded-bold.svg?v=39d032b56d63f152c2796741c4b192e09fcc3edae67c47a09c22d72ab4143c1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
