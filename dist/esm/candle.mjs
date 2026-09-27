export const name="candle";
export const id="dl_55a45add28ae3951c9ac";
export const url=new URL("../icons/candle.svg?v=6fc8ae02b30219b83381b881a82ba6c0531ddc7463943c90fa19e5597ecd5660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
