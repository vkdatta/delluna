export const name="looks_5-fill";
export const id="dl_00ff220075d3bfa0363f";
export const url=new URL("../icons/looks_5-fill.svg?v=08cf37c755ad62436ab0cb9bc0f2de169a0a4177dd953b468e3a0a773ec88338",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
