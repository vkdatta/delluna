export const name="arrow_upward-fill";
export const id="dl_44030e191fa04ead98c0";
export const url=new URL("../icons/arrow_upward-fill.svg?v=d88cba50ba5970b10a51daef875c1c8fa066c198e235f634f5379b8db8eeb903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
