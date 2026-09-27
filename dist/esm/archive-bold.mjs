export const name="archive-bold";
export const id="dl_0c0da38bc1af4aa7a58d";
export const url=new URL("../icons/archive-bold.svg?v=9c00237c16fdb14dba6efe1b303995c98ee8be9e3baab80d917af757ed898169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
