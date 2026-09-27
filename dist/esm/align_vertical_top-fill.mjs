export const name="align_vertical_top-fill";
export const id="dl_27bc14dba6cd174f921d";
export const url=new URL("../icons/align_vertical_top-fill.svg?v=075243fd43116d0a09352d1d050d946e7571008572cfc1e5832bbd53953cb4c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
