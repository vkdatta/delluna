export const name="cloud_off";
export const id="dl_fc506c77022395ac8a27";
export const url=new URL("../icons/cloud_off.svg?v=43e1f926ae3dc34cfdbef995c8dd361ee543c8425be6c672e5456e943c4eb254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
