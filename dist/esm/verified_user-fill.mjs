export const name="verified_user-fill";
export const id="dl_ae2e5f84287540dbb093";
export const url=new URL("../icons/verified_user-fill.svg?v=5a2d59c5ede38ee0ca86b29ce92bfa7d73eb079386c54ea9a08fd0a04832c724",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
