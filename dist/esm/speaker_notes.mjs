export const name="speaker_notes";
export const id="dl_1972888b637e49c4a1d9";
export const url=new URL("../icons/speaker_notes.svg?v=4d293523a7540894fc0d6e9f11fd6c8a995a92492ed3c803e59577687c8a8b09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
