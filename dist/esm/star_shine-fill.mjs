export const name="star_shine-fill";
export const id="dl_eeaa82507bb2daf3066c";
export const url=new URL("../icons/star_shine-fill.svg?v=d3820215e977ecfa72a3013b214123ce59b26942864650f8c798fc892ab5b3e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
