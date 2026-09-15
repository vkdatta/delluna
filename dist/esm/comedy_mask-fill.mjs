export const name="comedy_mask-fill";
export const id="dl_0cc59b503c3e45928372";
export const url=new URL("../icons/C/comedy_mask-fill.svg?v=7b0934a3fc35f432ac69421f0ddcdcf7850ea1c17acc75fbdd315101e6c632b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
