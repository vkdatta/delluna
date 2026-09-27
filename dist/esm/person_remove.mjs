export const name="person_remove";
export const id="dl_1f239707003edfc96d3f";
export const url=new URL("../icons/person_remove.svg?v=df244218e7c957f9b7b11e978c8b795ebb60f19e12b5256fc5aa2034dd350907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
