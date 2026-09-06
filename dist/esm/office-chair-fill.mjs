export const name="office-chair-fill";
export const id="dl_6837912b2c0c484aa437";
export const url=new URL("../icons/office-chair-fill.svg?v=f4785f4eeb622dcc21a7e2ec47b68b1a82b9988abffd9ea5b86f884351b37d48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
