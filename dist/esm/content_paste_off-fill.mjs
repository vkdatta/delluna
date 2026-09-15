export const name="content_paste_off-fill";
export const id="dl_c169cbca2a794f69ae21";
export const url=new URL("../icons/C/content_paste_off-fill.svg?v=2f4ab5f8e95ed9913f746e1162a2af6be4c34c69e342fcd026aaba4ddc86cac8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
