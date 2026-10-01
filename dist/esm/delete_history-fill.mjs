export const name="delete_history-fill";
export const id="dl_d834d8c60b7a4324a7c2";
export const url=new URL("../icons/delete_history-fill.svg?v=c1b79fff68a394dc2c0fedc646696ddcfcfddd8502066097690f0ff46b1d9215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
