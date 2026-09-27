export const name="snippet_folder-fill";
export const id="dl_20b688785e0eab87139b";
export const url=new URL("../icons/snippet_folder-fill.svg?v=db8dcf899a1f2350dad5a9e6a6229252f10985063dc6f59f46ab6fe037aefef0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
