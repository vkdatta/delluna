export const name="verified_off-fill";
export const id="dl_2e3a0217e290cb615a3d";
export const url=new URL("../icons/verified_off-fill.svg?v=515188c35c4a5317a6a85b2d18191d53b94787c1e38ea518e9a7f6a22715392b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
