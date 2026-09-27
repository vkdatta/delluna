export const name="dot-outline-bold";
export const id="dl_430734145371400d8f9f";
export const url=new URL("../icons/dot-outline-bold.svg?v=66d34190eb21750b75cad742306d1fd7d16affd8b393c25e91d5191782ddefc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
