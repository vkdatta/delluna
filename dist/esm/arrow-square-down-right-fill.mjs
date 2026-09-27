export const name="arrow-square-down-right-fill";
export const id="dl_0004fef34c7d40c6a894";
export const url=new URL("../icons/arrow-square-down-right-fill.svg?v=f83b220948a1016f654ba3a24027311c400a530a822561c0277c60704e63e21e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
