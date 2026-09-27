export const name="dew_point-fill";
export const id="dl_17d5a68055a6efa9eff8";
export const url=new URL("../icons/dew_point-fill.svg?v=7843d54437c3d401004b2f3412688cf8cbdc7bc1b0e5c5c0297074ed9e809f69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
