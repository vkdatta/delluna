export const name="inbox_text_asterisk-fill";
export const id="dl_32f944efad024adcbec4";
export const url=new URL("../icons/I/inbox_text_asterisk-fill.svg?v=23249df2929440bc1a00fab0be8f9bb62f03071d6ae5878455ebe1cf6c571992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
