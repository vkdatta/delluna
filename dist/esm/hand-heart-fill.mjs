export const name="hand-heart-fill";
export const id="dl_1d57033205214a3896d1";
export const url=new URL("../icons/hand-heart-fill.svg?v=49161dc449f67cec97912681b04ed9bf629510e312ae8c336bd2b0e07cd3a472",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
