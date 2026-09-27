export const name="do_not_step-fill";
export const id="dl_080f8fcfa771d86d8891";
export const url=new URL("../icons/do_not_step-fill.svg?v=6190e5e883ff74d1563ca336a660ba83639005d0e62875af0ce83aefaa7c1c91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
