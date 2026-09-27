export const name="restore_from_trash-fill";
export const id="dl_9148ecf780dfedf9e7a0";
export const url=new URL("../icons/restore_from_trash-fill.svg?v=edaee8a24a5502c70dd7af48c5d14ecab18d853b115c5c72cc92084a4b32258c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
