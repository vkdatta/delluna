export const name="collections_bookmark-fill";
export const id="dl_08902dc0d581b28edcb4";
export const url=new URL("../icons/collections_bookmark-fill.svg?v=f4ab1d37684d2beeb01e8c577756b7bd1596ad8b467fcdbfea00533e66bac11c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
