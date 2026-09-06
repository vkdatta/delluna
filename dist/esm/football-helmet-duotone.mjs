export const name="football-helmet-duotone";
export const id="dl_94bdd4256ccd45359e1a";
export const url=new URL("../icons/football-helmet-duotone.svg?v=463d8687df0178be4af5607892f326602f3afc748d020b658f574fa358a96b90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
