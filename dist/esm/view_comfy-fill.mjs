export const name="view_comfy-fill";
export const id="dl_38a69a071696bcf241e5";
export const url=new URL("../icons/view_comfy-fill.svg?v=d6431e5e20d27d2dc160849f59357a8d3d81cacdf5fd59a25487f0c77e93aa85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
