export const name="washoku";
export const id="dl_a5108087b8bf0a6301e4";
export const url=new URL("../icons/washoku.svg?v=f76bfe6b71434f8f4f858a3aac0384d0fc6093ddb11b1f95a328dbc14fa5dfa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
