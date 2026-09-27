export const name="man-fill";
export const id="dl_89f765361ee0ded5bc13";
export const url=new URL("../icons/man-fill.svg?v=9fba579a651de3e075263f8dc8f30f8886039fdd13dc346c254ad106370261e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
