export const name="arrow-up-right";
export const id="dl_7a850e50548341cab407";
export const url=new URL("../icons/arrow-up-right.svg?v=44db5257b360ec04863eb6daaa41f220c8b714d23fb81403517d0a30acfda9f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
