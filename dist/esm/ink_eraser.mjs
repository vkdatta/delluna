export const name="ink_eraser";
export const id="dl_b6a5ad0b262b4810b2e8";
export const url=new URL("../icons/I/ink_eraser.svg?v=f8ea7fb5dbc9f42b7a3d0dddcc390c39e1d5cdb2df2d87ad87af1a125fb15f32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
