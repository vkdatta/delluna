export const name="file-tsx-fill";
export const id="dl_063a3bb56a044bf3b581";
export const url=new URL("../icons/file-tsx-fill.svg?v=fa9b9a4cb295089678d219ec6ed875d7737f38a890d15814ed1b61634dbeda1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
