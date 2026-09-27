export const name="link-break-fill";
export const id="dl_f35cdb4c197f46deb201";
export const url=new URL("../icons/link-break-fill.svg?v=478edbe8443e9bca2626eff7c5ce7076d9091c7ddae922606444b35ae978556a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
