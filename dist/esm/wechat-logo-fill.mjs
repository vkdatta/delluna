export const name="wechat-logo-fill";
export const id="dl_2a87f4d3c937486bb683";
export const url=new URL("../icons/wechat-logo-fill.svg?v=69ae043a40118690c61dd56aff40d2966c687e82320bcecef99be2151b79a95c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
