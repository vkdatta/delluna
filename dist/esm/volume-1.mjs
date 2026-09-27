export const name="volume-1";
export const id="dl_28cbdd01083a4ee8959f";
export const url=new URL("../icons/volume-1.svg?v=1ed777f932e0e31337c50e1ebcbcc29ddcc95633afa98616f07121558d6b84ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
