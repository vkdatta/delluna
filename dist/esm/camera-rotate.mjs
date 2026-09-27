export const name="camera-rotate";
export const id="dl_13d10f095a58486682d4";
export const url=new URL("../icons/camera-rotate.svg?v=5bdf5a36027483f0a6e5fd297b33385b3e6101d741067805604187e92c00044b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
