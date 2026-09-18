export const name="electric_moped-fill";
export const id="dl_2ff574ee98f44552a227";
export const url=new URL("../icons/electric_moped-fill.svg?v=06f3d27ae4d8475f8147c249d137fb276a1434be6dd4d660f864ca56ed081ce0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
