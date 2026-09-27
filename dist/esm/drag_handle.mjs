export const name="drag_handle";
export const id="dl_6580df3dec16afd2d5a5";
export const url=new URL("../icons/drag_handle.svg?v=b13d6da19db6f49e67d76efc796584c54df2eb2f6ce83a2a4c2455f20ccbb0fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
