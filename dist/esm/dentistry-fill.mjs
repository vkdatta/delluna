export const name="dentistry-fill";
export const id="dl_3b45600895ef4dad9539";
export const url=new URL("../icons/D/dentistry-fill.svg?v=e9a11e4f96bd27c3d89ccb1850ea2d03886274647567c2750143f0646adfdd18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
