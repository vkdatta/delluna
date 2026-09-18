export const name="lda-fill";
export const id="dl_33212bd56e1047f6bdaa";
export const url=new URL("../icons/L/lda-fill.svg?v=d09c3d555dab28317804c11bdb393675e9862bb36273dc35d8edf2c0dfe4ae21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
