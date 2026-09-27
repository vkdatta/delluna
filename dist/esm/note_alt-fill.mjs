export const name="note_alt-fill";
export const id="dl_e50e6c1b860250848f81";
export const url=new URL("../icons/note_alt-fill.svg?v=a433366418dfac405548b0a9acbcdeb389f910736030cb13083df9f7f6e69733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
