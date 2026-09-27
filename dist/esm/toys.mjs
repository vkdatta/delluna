export const name="toys";
export const id="dl_1e50e2c6e6d8471bba4d";
export const url=new URL("../icons/toys.svg?v=245a4fc596c95e1c7309f0b9698c213c1022d97893287d05f48ee6d879d0d0cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
