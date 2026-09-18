export const name="password_2-fill";
export const id="dl_82e22d5b52a243c19559";
export const url=new URL("../icons/P/password_2-fill.svg?v=89cb89d86f04e9068303e146581e2eb3cc3d94d179b52364b78ab64d09547458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
