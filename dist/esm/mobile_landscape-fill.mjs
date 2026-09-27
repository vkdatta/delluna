export const name="mobile_landscape-fill";
export const id="dl_964263d2885475ebcee7";
export const url=new URL("../icons/mobile_landscape-fill.svg?v=0e3c624e7b1ddf561b37741085f4eef4682a214787942842c72bc5fc29737fae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
