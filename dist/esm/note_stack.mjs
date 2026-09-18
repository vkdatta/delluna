export const name="note_stack";
export const id="dl_7187820920bf4aaaa9e3";
export const url=new URL("../icons/note_stack.svg?v=6d4863dac0df0e43ccee0340524c6cd78196d79070a5ec5a8c7a214904cff4b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
