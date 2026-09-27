export const name="speaker_notes_off";
export const id="dl_e1d60abd5190592641e1";
export const url=new URL("../icons/speaker_notes_off.svg?v=dfe1df3c1e439837781a502a2536af3e146e9dd7354efffd8c5c2942451b4fe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
