export const name="lucid_3-square-dashed-bottom-code";
export const id="dl_e981aa004fe4410ba929";
export const url=new URL("../icons/lucid_3-square-dashed-bottom-code.svg?v=cf45d2c4cda87ddec946811b2c46da8f9b9c1c033124a7b035e50d66b2793701",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
