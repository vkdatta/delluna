export const name="speaker_notes_off";
export const id="dl_06dffab412e648e79c83";
export const url=new URL("../icons/S/speaker_notes_off.svg?v=8970027f5f4e9d6a2ba54c6bbd0046a1b5165cb65b6091113c8d695a78b492b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
