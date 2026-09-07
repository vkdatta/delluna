export const name="arrows-out-line-vertical-light";
export const id="dl_cf75f7d6b66f4a249b3c";
export const url=new URL("../icons/arrows-out-line-vertical-light.svg?v=9cf5d5b0a3d43ba3ee3190d2f47b2b113a7924c7f0acf22700414131703e5650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
