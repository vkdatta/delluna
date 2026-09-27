export const name="dropbox-logo-duotone";
export const id="dl_2482ed926c8b40ff8223";
export const url=new URL("../icons/dropbox-logo-duotone.svg?v=24936798149e65a9f1e2631c74eac788ff92707a36847ffa4c008882c3dba141",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
