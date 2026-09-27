export const name="sticky-note-minus";
export const id="dl_67318d6f555149238915";
export const url=new URL("../icons/sticky-note-minus.svg?v=5fce91ef7f9572494f4d07bf2d5df36d76154ac01f628f1ba5a83f88ced23bf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
