export const name="sunrise";
export const id="dl_b84688133b6c40e39dda";
export const url=new URL("../icons/sunrise.svg?v=08f361c9aa841b871d39700b0bdd721e9307914dcb307813b88afead68c50eed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
