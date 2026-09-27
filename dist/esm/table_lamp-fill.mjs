export const name="table_lamp-fill";
export const id="dl_8c1b2fc1fbc9cd763366";
export const url=new URL("../icons/table_lamp-fill.svg?v=fa54d91f6be5a6a45097d855c25f705c7c6e5dbf4964b96d7af03084bc130587",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
