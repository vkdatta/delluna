export const name="open_in_new";
export const id="dl_e034ffcf12ca3cf58330";
export const url=new URL("../icons/material_symbols/open_in_new.svg?v=1b2ad0c03005bb98746f32e4bac0de09c5ef20a485234d2182bdf756d3ae7402",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
