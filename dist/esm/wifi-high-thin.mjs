export const name="wifi-high-thin";
export const id="dl_1a6c058836b14f2cb08f";
export const url=new URL("../icons/W/wifi-high-thin.svg?v=d3b0e5dd1756022cc5a4527368dbfc904af9b878f3cce0720fd689f548715133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
