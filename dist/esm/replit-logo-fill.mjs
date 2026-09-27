export const name="replit-logo-fill";
export const id="dl_ac1fb9476e6b4088984d";
export const url=new URL("../icons/replit-logo-fill.svg?v=5223c0baeb1fef4d3a19232e86b5abd1e833ddbc43952b9e7c98a148cbfadcdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
