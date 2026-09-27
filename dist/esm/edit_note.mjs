export const name="edit_note";
export const id="dl_f44878cbbe1d88e27cf8";
export const url=new URL("../icons/edit_note.svg?v=57b5196f7fc8dcbf8a4affb460987383ea2b42e8079dc8c7d1d21e911c23c08b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
