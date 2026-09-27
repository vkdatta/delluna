export const name="mood_heart";
export const id="dl_882d7a4a47d152b88a3f";
export const url=new URL("../icons/mood_heart.svg?v=e388a8d14b19ff7b417b55c647075c4f3d6bfa6c057a5d12bdc02a515f6c0213",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
