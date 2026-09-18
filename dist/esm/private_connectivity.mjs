export const name="private_connectivity";
export const id="dl_15e3a8edb6544107a9ba";
export const url=new URL("../icons/P/private_connectivity.svg?v=acc269b8f67fffd746c6363769f66f3825aa49174aeb25e6551daf3e6fac3125",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
