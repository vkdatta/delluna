export const name="mobile_text-fill";
export const id="dl_65ee092c5f37d430f614";
export const url=new URL("../icons/mobile_text-fill.svg?v=6b915e4d6afa5e20284b39b2c5f7f951c8198732d7425217ad24b0013511f4cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
