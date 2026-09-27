export const name="cinematic_blur-fill";
export const id="dl_471a77c5376ca5f1ed23";
export const url=new URL("../icons/cinematic_blur-fill.svg?v=0b8d00d7a43df589951122f166a66e444f28adcd8e5465f6fccac9218e140e19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
