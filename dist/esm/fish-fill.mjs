export const name="fish-fill";
export const id="dl_406c517898604bc493dd";
export const url=new URL("../icons/fish-fill.svg?v=51426308d75bfc1625c87dfe79c4086ced87746debd41d0d855814c441c6bb5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
