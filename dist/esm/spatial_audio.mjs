export const name="spatial_audio";
export const id="dl_1878210f001d3d5cd293";
export const url=new URL("../icons/spatial_audio.svg?v=d846403aa66171e1779293f8fe1e98e78bced9daf63c992a1fef5ccfa3b77efd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
