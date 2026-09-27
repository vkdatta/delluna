export const name="speaker_notes";
export const id="dl_78233bab30d8714539e5";
export const url=new URL("../icons/speaker_notes.svg?v=37d75579adebfdc12e31d33efcc03e17dd593fcb4ac5228132b29f145039a747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
