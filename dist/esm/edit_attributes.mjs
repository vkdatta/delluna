export const name="edit_attributes";
export const id="dl_eab015af74694c8c8d1d";
export const url=new URL("../icons/E/edit_attributes.svg?v=95eb5519d00dea599de856e5c720aa89cb534cfcae17f0232b3aab36e3e82d0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
