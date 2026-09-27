export const name="sticky_note";
export const id="dl_8573544bf0bbbf7773d0";
export const url=new URL("../icons/sticky_note.svg?v=9746535e785fdcbe74047c04ce145c896dc652b56805bf3269acb64825fc2052",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
