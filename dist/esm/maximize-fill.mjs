export const name="maximize-fill";
export const id="dl_6c6dfe0ef6890f34712d";
export const url=new URL("../icons/maximize-fill.svg?v=c287115b6e6863a98fd6045f44c0e1e76d366387ad15880bd506686467b10931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
