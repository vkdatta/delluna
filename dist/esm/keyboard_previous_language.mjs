export const name="keyboard_previous_language";
export const id="dl_9959f865f31c4ff0a1d8";
export const url=new URL("../icons/keyboard_previous_language.svg?v=96a1561ac9aee4a97fa256eac822f478f4e91dbf9f6ebaa4e66baca63595cebc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
