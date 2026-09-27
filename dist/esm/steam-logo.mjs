export const name="steam-logo";
export const id="dl_e9bdd0cf4ac358a5bd73";
export const url=new URL("../icons/steam-logo.svg?v=842110e0658ba1464a5d61a30f9701c0067d5b7f4440148d6bd5d585b660ab64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
