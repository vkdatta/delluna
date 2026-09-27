export const name="chart-bar-horizontal-duotone";
export const id="dl_2b09c2ec1ba34fd7abf1";
export const url=new URL("../icons/chart-bar-horizontal-duotone.svg?v=53b35d5fd6eebf200879fb50cae33fac91122efb011a9752e4789d6674a481e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
