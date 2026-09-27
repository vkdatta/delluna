export const name="gender-female-fill";
export const id="dl_bd65ad7e65444ba891fc";
export const url=new URL("../icons/gender-female-fill.svg?v=719811f8adeedfdc48814d9a26b9641fb8636ceee6cc52518719acdd27b9eb11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
