export const name="navigation-fill";
export const id="dl_0bdf3fbf5b1be62dadb8";
export const url=new URL("../icons/navigation-fill.svg?v=636a69919f1cf5fba1e4fe1bb390ca07a943620e702922b43a7a9be0db10cf75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
