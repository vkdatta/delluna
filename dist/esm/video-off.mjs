export const name="video-off";
export const id="dl_11da604534c84aa59087";
export const url=new URL("../icons/video-off.svg?v=6877761a39a7744687356119ae3b35d41f6d57b4e4ae15d5f2103cd2268a0885",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
