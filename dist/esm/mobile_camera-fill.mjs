export const name="mobile_camera-fill";
export const id="dl_eddc8e18b7290f9dbd84";
export const url=new URL("../icons/mobile_camera-fill.svg?v=6d45cb80ae33f9ef2045ee96d9898464c0e0f6f9c2bfc0457da64b2305b0eaee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
