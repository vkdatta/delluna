export const name="note";
export const id="dl_4b969c18d645461eaa10";
export const url=new URL("../icons/note.svg?v=8d1e95d6ab6fd2ffef01fde983f32703ac4d60da40b585898355e0f3f4a24eb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
