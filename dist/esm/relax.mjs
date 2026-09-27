export const name="relax";
export const id="dl_51c4875d2c25d3fed61d";
export const url=new URL("../icons/relax.svg?v=7391ee7f8a2c1e8a66acf354e6d2b8095e75e8d078ee82a1fb57e49a574a088f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
