export const name="film-script-light";
export const id="dl_3733eeee3d004960834c";
export const url=new URL("../icons/film-script-light.svg?v=c1283fa40aba29aed989e90fb99fb12493499efd27d2dd68fdd42374d1f4ff84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
