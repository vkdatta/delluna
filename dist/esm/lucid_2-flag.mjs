export const name="lucid_2-flag";
export const id="dl_57c1048d32a44e41932d";
export const url=new URL("../icons/lucid_2-flag.svg?v=f47b90fb11245ed6086f45aa7acb605a05532d63153d2308618fd3848e7b88f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
