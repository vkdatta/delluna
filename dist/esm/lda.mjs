export const name="lda";
export const id="dl_f9384b57147bd39ea726";
export const url=new URL("../icons/lda.svg?v=f59f3bd0f9cf40bc2cd514ffb8e48ac2b5935cdda24ad7c3579fd858bbf3b6df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
