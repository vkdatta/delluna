export const name="humidity_percentage";
export const id="dl_d83803f2ceb546ae93ac";
export const url=new URL("../icons/H/humidity_percentage.svg?v=e48a9999409710555fe398111a5598e16b0fdf27466cb4d91f97eb61dd04c20f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
