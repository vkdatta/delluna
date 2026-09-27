export const name="behance-logo-thin";
export const id="dl_edd7e9481add40f2a033";
export const url=new URL("../icons/behance-logo-thin.svg?v=96c1c347e667f573daf4502582532357586109e66a5ee1711f9bc328ef7009e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
