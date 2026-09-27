export const name="shaved_ice";
export const id="dl_e9367dbc15b022f29615";
export const url=new URL("../icons/shaved_ice.svg?v=1a11e893edc2798c3dc0ad69a29be7cc22f995d4d352e5141304d4b60dea6118",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
