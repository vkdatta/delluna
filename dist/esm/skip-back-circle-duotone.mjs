export const name="skip-back-circle-duotone";
export const id="dl_85a3575f12d9f9d04340";
export const url=new URL("../icons/skip-back-circle-duotone.svg?v=d1982c812e3a753f0c1e8c21346fe5e5a7334c428448ca46bfeec06ef5647010",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
