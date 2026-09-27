export const name="file-csv-fill";
export const id="dl_4032fab7d67d46ef90fe";
export const url=new URL("../icons/file-csv-fill.svg?v=f22d451dc9c65c5bc07a0d20a020591bfd105ce2dd57da2e5c5cd496c6ef2955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
