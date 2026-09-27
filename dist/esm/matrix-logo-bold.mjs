export const name="matrix-logo-bold";
export const id="dl_7895658c39c94313b93d";
export const url=new URL("../icons/matrix-logo-bold.svg?v=aff1f1f1c25edc194b5397f52c17dedfd597c2658e41143ad9c9a3c7491e5453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
