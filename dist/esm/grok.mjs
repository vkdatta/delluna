export const name="grok";
export const id="dl_c758088c0076c6f69f4e";
export const url=new URL("../icons/grok.svg?v=75545c26797ad129168c32efe8b13e75f09db667eb44abbe7dc6218cdbacfa48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
