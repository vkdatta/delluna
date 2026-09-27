export const name="5g_mobiledata_badge-fill";
export const id="dl_0d55fad851d5d85ae658";
export const url=new URL("../icons/5g_mobiledata_badge-fill.svg?v=04b4bf8dcf4732b31c86e1e5a55be921ecf10dcbcbde725797f2d4343c4861a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
