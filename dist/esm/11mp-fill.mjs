export const name="11mp-fill";
export const id="dl_f055b3eb8c49aa039f7c";
export const url=new URL("../icons/11mp-fill.svg?v=386fa43a56bcd2032b96ac8742a3d5c75c03e5ac0b8fcba6bc45a2a0f682f158",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
