export const name="note_add";
export const id="dl_df80059953f58446eace";
export const url=new URL("../icons/note_add.svg?v=439fc733cd1724981492226cad8db17d023685cffa4ad577923521929f768c3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
