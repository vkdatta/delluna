export const name="lucid_2-grid-2x2-check";
export const id="dl_aec91f53ecf74648b9ea";
export const url=new URL("../icons/lucid_2-grid-2x2-check.svg?v=fd56a13cd231ad686532eb4fb440111748a763b0bb583b2d0c586d37ab81b0a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
