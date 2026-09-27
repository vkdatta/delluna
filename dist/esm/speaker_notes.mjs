export const name="speaker_notes";
export const id="dl_e7e1ea7a50d051f4ea45";
export const url=new URL("../icons/speaker_notes.svg?v=309c2587af1181e088a7edf0848baf465b641510ea77d8af38ec22066eccdccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
