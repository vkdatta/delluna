export const name="preview_off-fill";
export const id="dl_ef5b7cc818e073173dd8";
export const url=new URL("../icons/preview_off-fill.svg?v=5a3bf740c33e604f3071dd0c2d69af5b5619ae1b72ee8dec2666868c2044ab72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
