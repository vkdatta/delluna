export const name="tote-light";
export const id="dl_7d3a650e4986a5024f6e";
export const url=new URL("../icons/tote-light.svg?v=af8f722cacad27e09409cc3d231aaaec35ce2b39519bba2bb376b157a6304903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
