export const name="trend-down-duotone";
export const id="dl_eb35f3ab98c443c024a8";
export const url=new URL("../icons/trend-down-duotone.svg?v=1b254275c6f5f1a48fd9fdd183197f734c72d4e76f0e4ccda2cc1cb13ff8b93e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
