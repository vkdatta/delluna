export const name="sticky_note-fill";
export const id="dl_18a1f7caac32dff57aca";
export const url=new URL("../icons/sticky_note-fill.svg?v=234b18a5137cb27dcf0b3434d78c35e468a5abf6606b479e98b485f72399e761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
