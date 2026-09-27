export const name="dropbox-logo-duotone";
export const id="dl_2482ed926c8b40ff8223";
export const url=new URL("../icons/dropbox-logo-duotone.svg?v=b8f353b03519f56e928f69b66c3eb12760291037fea8092485b6b3209ae0ee67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
