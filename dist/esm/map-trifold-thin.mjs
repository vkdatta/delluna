export const name="map-trifold-thin";
export const id="dl_946931f491804789875c";
export const url=new URL("../icons/map-trifold-thin.svg?v=7b5940c46e3b65c7f0e66926a138e084afbc8a0a41b124543b906b435db44d2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
