export const name="telegram-logo-bold";
export const id="dl_c569a3feb1b348cfa7a0";
export const url=new URL("../icons/T/telegram-logo-bold.svg?v=7a75059ac23475942d1d9e269c2ccc0e353595d227d6d6cb9114bc71e75dee95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
