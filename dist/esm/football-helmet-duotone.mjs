export const name="football-helmet-duotone";
export const id="dl_94bdd4256ccd45359e1a";
export const url=new URL("../icons/football-helmet-duotone.svg?v=f69b5e6bb3c49f72227a18f70f98577cf5368d028cbdbe85ad926e81ceda5411",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
