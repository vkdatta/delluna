export const name="family_star-fill";
export const id="dl_050d95084c4a4680548b";
export const url=new URL("../icons/family_star-fill.svg?v=35736663c9a0459e39684bdd0cd3e5012459632332608263035e24a8bf0129b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
