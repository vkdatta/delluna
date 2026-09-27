export const name="mfg_nest_yale_lock-fill";
export const id="dl_7f449e7401feb310b66e";
export const url=new URL("../icons/mfg_nest_yale_lock-fill.svg?v=378c152935287a24b1a272e07cdf40055eec3805b2f1c6a6da9be9aa954d835e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
