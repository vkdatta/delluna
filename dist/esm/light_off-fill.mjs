export const name="light_off-fill";
export const id="dl_f608558ba1b247a69835";
export const url=new URL("../icons/light_off-fill.svg?v=67e17dd2d9614b240967a7c0496b1e05fa55245944574e1077b888c759548952",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
