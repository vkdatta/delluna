export const name="article-duotone";
export const id="dl_cce6728ac0dc463b82e2";
export const url=new URL("../icons/article-duotone.svg?v=c2c8310ce3fab4bc8bb3a1998814d037e50ad631a79aabdf00deec5162816eff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
