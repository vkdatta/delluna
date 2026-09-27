export const name="file_save";
export const id="dl_3954acc973a944390987";
export const url=new URL("../icons/file_save.svg?v=649a56790d20335432a3773e32083cf7eabe75d8fb2a79bfb182598c6268ae64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
