export const name="php-fill";
export const id="dl_2ca2119c2c6939f4070e";
export const url=new URL("../icons/php-fill.svg?v=e59f1649f89af74d6c6abd8570cb9526091c3437ca0203d0b7687d8cbecadf6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
