export const name="keyboard_lock";
export const id="dl_446cb524386130207c10";
export const url=new URL("../icons/keyboard_lock.svg?v=896a6665c8613e45ecc8251b4e80fe17e2899af8e1d1d525458435bd7705f12c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
