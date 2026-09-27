export const name="superset-proper-of-light";
export const id="dl_c66ced9229238dcb56bb";
export const url=new URL("../icons/superset-proper-of-light.svg?v=b9bb9b32dcee8ede8fb227d126e3a8dffeaa41fa4dd0d6fc45180652c24a5f63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
