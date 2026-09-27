export const name="line_start_arrow_notch-fill";
export const id="dl_a12de3619e3910d0117f";
export const url=new URL("../icons/line_start_arrow_notch-fill.svg?v=4f96048365b12f20b6dcbf49124870ee2a5bfbcd5eb7eb8e5027cf6866c1c12d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
