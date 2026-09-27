export const name="private_connectivity-fill";
export const id="dl_23ee27e567d926b97f5d";
export const url=new URL("../icons/private_connectivity-fill.svg?v=12e24209a314c12635713ebda253d488bc758bb35009ecc9337eb8518ae0c85b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
