export const name="arrow_back";
export const id="dl_d25f1fe91c87871d603b";
export const url=new URL("../icons/arrow_back.svg?v=f62d14714fa2db830cbab922b0362a1f24b577c0a9c7d1137a294642f2ca243b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
