export const name="widget_menu-fill";
export const id="dl_935d535d3d0cfb8b2c83";
export const url=new URL("../icons/widget_menu-fill.svg?v=6679a94c2618c047f7413170e99666f0c0e66a6db5580263e51c48bfc86f1bcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
