export const name="elderly_woman-fill";
export const id="dl_2181d88208267760bd58";
export const url=new URL("../icons/elderly_woman-fill.svg?v=94f9daf2b239a5ccd563cae1596cab301c12403ce9dd8b704cb7bec88e659578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
