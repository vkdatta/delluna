export const name="playlist-light";
export const id="dl_e1cf2b99ef5c4fd7bd11";
export const url=new URL("../icons/playlist-light.svg?v=129a50d8086e8d48fb03f0a8777f72f457aff9bcbbab216f72b32d091e2814f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
