export const name="lucid_3-menu";
export const id="dl_c8908906ec9c4484bdff";
export const url=new URL("../icons/lucid_3-menu.svg?v=9e81c2a0babfa5182f3b43145e0c521dd80f881ee260c61e00c00d74b9051c82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
