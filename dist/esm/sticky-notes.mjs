export const name="sticky-notes";
export const id="dl_5682c307aa9244de81b6";
export const url=new URL("../icons/sticky-notes.svg?v=24fc5168808b981e2b996e339f32a96868cc905c81becfb046d7782aab1af9c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
