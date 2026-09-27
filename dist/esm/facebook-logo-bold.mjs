export const name="facebook-logo-bold";
export const id="dl_de6eb3496b854c4fb2dc";
export const url=new URL("../icons/facebook-logo-bold.svg?v=d5dae0195969b171ce59cfc3829d2076749950a9cf4b52bff6fb811f714896b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
