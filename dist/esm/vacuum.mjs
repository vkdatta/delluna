export const name="vacuum";
export const id="dl_5173b7023ff5ace9399d";
export const url=new URL("../icons/vacuum.svg?v=3cb46e2c4cc07d7d9403d239bb8b27343dcab802719794436cc5cdef2fe51a28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
