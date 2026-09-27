export const name="sticky-note";
export const id="dl_06a29c16f64746849052";
export const url=new URL("../icons/sticky-note.svg?v=ef836d4ff6a24ac50f5ce30a0a86066cc420dbcfd1cdcd5e6c9dda685de114ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
