export const name="cast-fill";
export const id="dl_ba07756f0df440338bdc";
export const url=new URL("../icons/C/cast-fill.svg?v=18ca291f86fbca10f40dba5010581891b645914b4c87b58b464123e95e0cca3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
