export const name="sticky-note-x";
export const id="dl_7d2d004963a049dbb7e4";
export const url=new URL("../icons/sticky-note-x.svg?v=470505920d1cc4fce3fe404f5e1b6fb9f95fb4fe058df247cb32f037519cc30b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
