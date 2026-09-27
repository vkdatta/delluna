export const name="speaker_notes_off";
export const id="dl_ce467e11480a26ceffbc";
export const url=new URL("../icons/speaker_notes_off.svg?v=009b3c7888c707a9ed8b7b98e44c81b0eed18a1874fd164ee08a2e9d41a50cbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
