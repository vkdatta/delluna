export const name="devices_fold";
export const id="dl_db405ec692f0d039a8f8";
export const url=new URL("../icons/devices_fold.svg?v=c0183d687ab5fafc7f4c1a38f6d77eb405dce4f79708d0828ab6cb7a66386216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
