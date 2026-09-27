export const name="lucid_1-broom-sparkles";
export const id="dl_7791b3ca8a27444480e7";
export const url=new URL("../icons/lucid_1-broom-sparkles.svg?v=e042eec5cb281e7cf7d6baebbe4641a8b649661cae58d723e7e356ea3b07307d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
