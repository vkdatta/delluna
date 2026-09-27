export const name="4g_plus_mobiledata";
export const id="dl_4b7fe05611d0dfcb0652";
export const url=new URL("../icons/4g_plus_mobiledata.svg?v=29c97b783f2b5cb9873febf81220ca65844872e41bc01bd851590cab16e40265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
