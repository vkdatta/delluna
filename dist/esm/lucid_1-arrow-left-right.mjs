export const name="lucid_1-arrow-left-right";
export const id="dl_421809b335954aa3a855";
export const url=new URL("../icons/lucid_1-arrow-left-right.svg?v=30e1a2a0b00ede28cbfc2ff0842e606eb83cd3fba06324f7dd370b12a51a879b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
