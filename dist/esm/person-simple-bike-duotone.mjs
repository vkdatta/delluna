export const name="person-simple-bike-duotone";
export const id="dl_021456c2f5134545beb1";
export const url=new URL("../icons/person-simple-bike-duotone.svg?v=59fe8ddda7d07c78ad31ba1657224646432241bdd609e8c0249c45b8cee16cb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
