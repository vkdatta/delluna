export const name="lucid_1-arrow-down-narrow-wide";
export const id="dl_c4b7423a4dbb49be963e";
export const url=new URL("../icons/lucid_1-arrow-down-narrow-wide.svg?v=55d947561e255b1c7a12fdb7c099f3a5e10fee01d72e41403f7fd4424110eb63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
