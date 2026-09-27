export const name="visibility-fill";
export const id="dl_8c7f70eee5b5f615e204";
export const url=new URL("../icons/visibility-fill.svg?v=df67ee3c9566a4173e7403ad3a433419d40105e7a7478e84b614bf9843f0b91e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
