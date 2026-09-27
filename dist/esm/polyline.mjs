export const name="polyline";
export const id="dl_e3473b64015074887ad1";
export const url=new URL("../icons/polyline.svg?v=2d3fde100066c67d87acec20a744096729eb2e9c3d33483f255c8e0b41ba7f86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
