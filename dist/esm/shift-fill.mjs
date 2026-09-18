export const name="shift-fill";
export const id="dl_3cf596441792411b93b4";
export const url=new URL("../icons/S/shift-fill.svg?v=088fae67df1c9bde25dc6494d0051779bad337e8c67d43fcbff2c28ca2090e08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
