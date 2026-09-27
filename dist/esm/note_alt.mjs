export const name="note_alt";
export const id="dl_52a3f5b329492b294885";
export const url=new URL("../icons/note_alt.svg?v=e61f18cf9b09a7ab7e10b066c2477af42dc2533065acdc34ebe938318eb962f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
