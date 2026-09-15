export const name="deblur-fill";
export const id="dl_13018c376abf44ba8989";
export const url=new URL("../icons/D/deblur-fill.svg?v=32e3b6a1b7e54013bda4cb4fde66a230bc18a8789798322fa2a55adbcb96455b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
