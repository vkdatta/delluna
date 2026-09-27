export const name="fish-fill";
export const id="dl_406c517898604bc493dd";
export const url=new URL("../icons/fish-fill.svg?v=67851d4507384ca735994b5e6f3662c2fa1ecfcd6b8c435945a2647c8c99e060",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
