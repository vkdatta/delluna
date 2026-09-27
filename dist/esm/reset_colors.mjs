export const name="reset_colors";
export const id="dl_1d0e2b24edc5a160f093";
export const url=new URL("../icons/reset_colors.svg?v=f1d4bf7f22aa3461bffd355d651d899cb040d3558f68baff14d45af0ce8c8815",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
