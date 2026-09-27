export const name="aperture-thin";
export const id="dl_61bc06ba408d41b589e2";
export const url=new URL("../icons/aperture-thin.svg?v=e8842f3d0981b55e55793147668699e6f1d1f53011546b03c3d780bb4f13d155",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
