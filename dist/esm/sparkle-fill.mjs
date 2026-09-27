export const name="sparkle-fill";
export const id="dl_75a93e4ffbfa4ac9d258";
export const url=new URL("../icons/sparkle-fill.svg?v=b5224d41c68b04e27b3e631026b07404c11a1c9dd29b771a8e72628c6ed02072",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
