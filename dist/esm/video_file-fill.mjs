export const name="video_file-fill";
export const id="dl_1d9734c097d1cdb5ca7d";
export const url=new URL("../icons/video_file-fill.svg?v=1da33f450e7d3d9354e6e649ff2d80873d91ad90fdd65d24afc3b40fa87e9e87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
