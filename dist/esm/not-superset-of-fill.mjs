export const name="not-superset-of-fill";
export const id="dl_a43e880f714f4b138b9c";
export const url=new URL("../icons/not-superset-of-fill.svg?v=8e3ded3379f931ac2f87ebabaf9a6ee6ba137c637e137a987a14f0c8757a98ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
