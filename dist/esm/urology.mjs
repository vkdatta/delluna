export const name="urology";
export const id="dl_ceeb6eface2a490ab753";
export const url=new URL("../icons/urology.svg?v=7dc2dbe46d22dfa2aa8d0b3049d3fb7268f037c4f6706502ce1580584c48f842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
