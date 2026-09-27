export const name="wind-arrow-down";
export const id="dl_34144465a79d434c8a2b";
export const url=new URL("../icons/wind-arrow-down.svg?v=257763e538fe53027e7cbc2ac208ffb4b21e7f10c81b3d2457c4e9438feceda3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
