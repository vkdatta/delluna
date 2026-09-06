export const name="lucid_1-blinds";
export const id="dl_16ce83cc18a1466e9917";
export const url=new URL("../icons/lucid_1-blinds.svg?v=39ed364d0cceddc698fdcf2291a2ad8ec81e049a45e8d7e7f2fa9e830c87cca1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
