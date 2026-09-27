export const name="deselect-fill";
export const id="dl_f13103b3a27f29422317";
export const url=new URL("../icons/deselect-fill.svg?v=661f5272bf1d33142792446afb5fc9fe7658e5018309fa3d1366057255534c56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
