export const name="paw-print-thin";
export const id="dl_80c25273a0c14fc69864";
export const url=new URL("../icons/paw-print-thin.svg?v=768ab3416b574de811ef7e2f6472a6cd29ef519bc3cdc2717a2c04758fe4228a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
