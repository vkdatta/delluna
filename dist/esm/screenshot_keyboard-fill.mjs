export const name="screenshot_keyboard-fill";
export const id="dl_a563410747744ee9b37c";
export const url=new URL("../icons/screenshot_keyboard-fill.svg?v=ec8965af927125ba020f497196214d8ff6d64ca81ef71657c8a6905158217c3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
