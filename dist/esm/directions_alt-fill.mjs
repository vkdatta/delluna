export const name="directions_alt-fill";
export const id="dl_4e14571988724525a8b5";
export const url=new URL("../icons/D/directions_alt-fill.svg?v=1d30e22a127683a6041ac043ff375bd3159a43835bb1d5bf90007aaba0983152",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
