export const name="bottom_panel_open-fill";
export const id="dl_c9252f5d5f8a231ead5c";
export const url=new URL("../icons/bottom_panel_open-fill.svg?v=3836a858b01a6f33fc11ec530c1b33409f2752bcf45e8cf4709daee5409d7068",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
