export const name="directions_boat-fill";
export const id="dl_b325950c1ba3f9399bac";
export const url=new URL("../icons/directions_boat-fill.svg?v=63108f1a7c837426277cb26fa61315fccd8298022f5268d44440ac397902b612",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
