export const name="facebook-logo-fill";
export const id="dl_50682d998a764a2d9e7a";
export const url=new URL("../icons/facebook-logo-fill.svg?v=723a97ea068ebdbbbd44b6cb61f25ebb9275d074863b647a7a5c7b7962777472",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
