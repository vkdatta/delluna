export const name="check-circle-duotone";
export const id="dl_26ecfd92df41420fb35d";
export const url=new URL("../icons/check-circle-duotone.svg?v=02a292e16117eca972cfe058c227e2440351d65eab2978aab79a737516762800",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
