export const name="text_rotation_down-fill";
export const id="dl_3ed7d092e0de448b88fe";
export const url=new URL("../icons/text_rotation_down-fill.svg?v=47f26bd09762f7376d52d9e4021405931d8a8a1f413f731162cc893043002db8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
