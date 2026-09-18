export const name="line_start_square";
export const id="dl_7a79c75dbfaf464a84f4";
export const url=new URL("../icons/line_start_square.svg?v=bb83c0a07752283f55dbd5e1b615c57b8876a613682e8b126ab360c93420c842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
