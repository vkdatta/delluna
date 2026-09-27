export const name="speaker_notes";
export const id="dl_7fc2b68efc8db17f68d5";
export const url=new URL("../icons/speaker_notes.svg?v=97b5cb523b12347a2545d0446d98dc6bbf2366e31b3713eb8575c559da39e30d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
