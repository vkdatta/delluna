export const name="metronome";
export const id="dl_7dcc7780398e4c208655";
export const url=new URL("../icons/metronome.svg?v=877ead91294d58b3aade60eee4c16773892888da7c18612073821ba560db3ad1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
