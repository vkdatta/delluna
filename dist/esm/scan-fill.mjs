export const name="scan-fill";
export const id="dl_a73c2e2d51154dbc97dd";
export const url=new URL("../icons/S/scan-fill.svg?v=7de5205c44294dc9051a39bcce7104e1f3d53da2785cf370fdeb5bf9d34e77b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
