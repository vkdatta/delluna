export const name="bottom_panel_open-fill";
export const id="dl_da323789e8daa5376a00";
export const url=new URL("../icons/bottom_panel_open-fill.svg?v=da1895fe7ad3ab83611bcebf53a226463f81971cd58f2ec315640ab4e44640a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
