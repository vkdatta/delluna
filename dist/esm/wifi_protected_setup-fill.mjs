export const name="wifi_protected_setup-fill";
export const id="dl_8d380d70c54e4946b8c4";
export const url=new URL("../icons/wifi_protected_setup-fill.svg?v=9fc8a6bf661f2502d1e1b35366d50cd92d9571df6ced64b5e56676f985b2ed56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
