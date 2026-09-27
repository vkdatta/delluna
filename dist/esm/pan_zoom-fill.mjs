export const name="pan_zoom-fill";
export const id="dl_742cac952a4d0c86221b";
export const url=new URL("../icons/pan_zoom-fill.svg?v=68332afcaf8ba4ab2be77a3909902a8b6a8af282714bfb25fceb6fdac9dd44b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
