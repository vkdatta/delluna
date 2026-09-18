export const name="speaker_notes-fill";
export const id="dl_e296c137684c42f59430";
export const url=new URL("../icons/speaker_notes-fill.svg?v=2601c8efb875474e512f54c19b20e12543edea9df4b9d48ffcf131af50727faf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
