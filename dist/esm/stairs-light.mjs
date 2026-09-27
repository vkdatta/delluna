export const name="stairs-light";
export const id="dl_1f6e226ef9c92c00626d";
export const url=new URL("../icons/stairs-light.svg?v=1ecb7556e815149c3a3ada324bb97f192aa43f52222b065be676c30afd113172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
