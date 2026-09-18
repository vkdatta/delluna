export const name="source_notes";
export const id="dl_8b0f561ebd5c467ba69c";
export const url=new URL("../icons/S/source_notes.svg?v=5bacd6cfb8d28e7d4a660af240b2425f28120b96218dd8583fa19dc359477d01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
