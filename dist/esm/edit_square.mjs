export const name="edit_square";
export const id="dl_14afb822cde36c7f723d";
export const url=new URL("../icons/edit_square.svg?v=98301f86510b02b2142b542f6d4949ba861ee44328d9b679f9d4a3f055d27ae8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
