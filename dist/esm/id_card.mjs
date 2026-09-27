export const name="id_card";
export const id="dl_e44c6de8560634e1b761";
export const url=new URL("../icons/id_card.svg?v=2b92ab6cb15b55c40fadf9198e3929cc8a0a81567bafd75ad02ebb85e2e99abe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
