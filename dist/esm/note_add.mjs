export const name="note_add";
export const id="dl_df80059953f58446eace";
export const url=new URL("../icons/note_add.svg?v=425d1f50e888e31fb0319bb0e947f80a190083af162caa23fa32c054ce60452a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
