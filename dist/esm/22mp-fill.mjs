export const name="22mp-fill";
export const id="dl_847ba9ef0fd685967a96";
export const url=new URL("../icons/22mp-fill.svg?v=415a8b5145304f26c3738b443eda9b51dcb0dbe293c82ac2cf1efb668038d2d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
