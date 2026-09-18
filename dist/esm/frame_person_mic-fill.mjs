export const name="frame_person_mic-fill";
export const id="dl_73f8ca1817d441e1ab35";
export const url=new URL("../icons/frame_person_mic-fill.svg?v=33971edb1975a3da97baa8c5660fcda83073e4b446da9eb152b3a255ca9001b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
