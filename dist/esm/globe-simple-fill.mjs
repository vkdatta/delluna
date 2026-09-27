export const name="globe-simple-fill";
export const id="dl_2c069e10cf024bda87fb";
export const url=new URL("../icons/globe-simple-fill.svg?v=89b889d19d1ecef375e5570c971f4da2fcd9c576eba50e82035afa0259af9c65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
