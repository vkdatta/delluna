export const name="trolley-fill";
export const id="dl_8f44ca975bdbe442b12d";
export const url=new URL("../icons/trolley-fill.svg?v=d210309097f89b6acd9de25b2a3c2678f766ca7155cc4c2888c8747d1d618d6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
