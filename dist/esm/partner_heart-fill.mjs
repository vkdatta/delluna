export const name="partner_heart-fill";
export const id="dl_9a5b613abe203ae444de";
export const url=new URL("../icons/partner_heart-fill.svg?v=832750279fe15ed88d4dc7cbc06d69d5cff5c216c345ef2ff37b94316b641ec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
