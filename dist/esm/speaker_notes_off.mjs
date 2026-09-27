export const name="speaker_notes_off";
export const id="dl_9011f54257986a5c301d";
export const url=new URL("../icons/speaker_notes_off.svg?v=ecbf8c7c1a850a422cdd72bff35d74d3faaea9b4514c25c2f39909d20adba434",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
