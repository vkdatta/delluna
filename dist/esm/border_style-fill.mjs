export const name="border_style-fill";
export const id="dl_c736cdb1d13fe61cc72a";
export const url=new URL("../icons/border_style-fill.svg?v=93602d3ced5005f715d66884fbeccf8bd0309e8e02d732affb2c9458576775b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
