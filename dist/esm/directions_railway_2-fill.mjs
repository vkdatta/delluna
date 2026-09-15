export const name="directions_railway_2-fill";
export const id="dl_2483582a039e4badbcdd";
export const url=new URL("../icons/D/directions_railway_2-fill.svg?v=52477a2ac43c08bb170c046d8c9fa1490bd0906a396cab91b7f104f4e43d1495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
