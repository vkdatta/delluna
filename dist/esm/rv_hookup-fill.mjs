export const name="rv_hookup-fill";
export const id="dl_4332235717edbe2d74e6";
export const url=new URL("../icons/rv_hookup-fill.svg?v=e5271b3985b36f2b3598679b83cd511cf7e6e727e09a75788957a9b40985f1c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
