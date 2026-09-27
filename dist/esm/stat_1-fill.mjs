export const name="stat_1-fill";
export const id="dl_6ff70932e5e024b69f57";
export const url=new URL("../icons/stat_1-fill.svg?v=ad8df927664a749928ae1f9a3ec5f4dbc25ffb9bb74cfb0fed6b399cb76a20f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
