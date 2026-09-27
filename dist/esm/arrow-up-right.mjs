export const name="arrow-up-right";
export const id="dl_7a850e50548341cab407";
export const url=new URL("../icons/arrow-up-right.svg?v=c07251b140f5257c5abf81b1d24aa478cfd08935b6b93c5b75abc6a6e654eb14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
