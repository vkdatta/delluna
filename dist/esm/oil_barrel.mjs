export const name="oil_barrel";
export const id="dl_aa996006702c5cda7d6d";
export const url=new URL("../icons/oil_barrel.svg?v=23f56e436e5c627e98a7720344e25b55f72e7ea16c34418a76cfad404723bdbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
