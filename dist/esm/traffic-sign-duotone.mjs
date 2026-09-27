export const name="traffic-sign-duotone";
export const id="dl_f1e18196fb5269fd394a";
export const url=new URL("../icons/traffic-sign-duotone.svg?v=82991783a278075f01cdb5816febd3125e12add6c6bf167cb9acfdb1fadf7d84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
