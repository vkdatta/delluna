export const name="microsoft-powerpoint-logo-duotone";
export const id="dl_e732b9beb4a84e479b52";
export const url=new URL("../icons/microsoft-powerpoint-logo-duotone.svg?v=f9153ee5706af7a44b53d9fdeb15ae6312122daed65cf87c328f1a169e5a8a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
