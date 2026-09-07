export const name="voicemail-fill";
export const id="dl_b550eca024b5452ca0eb";
export const url=new URL("../icons/V/voicemail-fill.svg?v=2b659cea0e8c1b4b24f516a2bd12cf3021d0ff720d25eceedff6e7475b9a0b94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
