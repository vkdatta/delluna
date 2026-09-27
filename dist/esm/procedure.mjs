export const name="procedure";
export const id="dl_11ca8c144b46021782fd";
export const url=new URL("../icons/procedure.svg?v=c4d771b328bb07f8931162a7a07d27f8f4cda266fc6ab693de1b88d475aa9cbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
