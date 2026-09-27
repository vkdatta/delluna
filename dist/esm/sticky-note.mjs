export const name="sticky-note";
export const id="dl_06a29c16f64746849052";
export const url=new URL("../icons/sticky-note.svg?v=731efc32d47922c0f818239473a18dfb7fa08067611f3ec95bfb8de7f5608e9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
