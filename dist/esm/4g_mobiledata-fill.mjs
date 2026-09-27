export const name="4g_mobiledata-fill";
export const id="dl_f49ef726b20d6d2c073b";
export const url=new URL("../icons/4g_mobiledata-fill.svg?v=702753f3b3dcc9e96b0f28312a178d071a2c4eae63895f9c1f3ceb2f3bde129f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
