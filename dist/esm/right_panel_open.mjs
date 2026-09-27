export const name="right_panel_open";
export const id="dl_1a0b2aa39ef18a6deebd";
export const url=new URL("../icons/right_panel_open.svg?v=bcf0353dd838fb6702701c0a5b54817b4cbbcf4c5425f1eabd7cdd0547f44179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
