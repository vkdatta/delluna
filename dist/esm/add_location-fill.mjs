export const name="add_location-fill";
export const id="dl_8ae98a1aff7ec0edbdb0";
export const url=new URL("../icons/add_location-fill.svg?v=e59cf642d6aa88b5ecc629d8114b465a453e1a0383469feeda21fcb69edb4fe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
