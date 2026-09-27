export const name="4g_mobiledata";
export const id="dl_ce7a890cf1362cd2e43f";
export const url=new URL("../icons/4g_mobiledata.svg?v=702753f3b3dcc9e96b0f28312a178d071a2c4eae63895f9c1f3ceb2f3bde129f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
