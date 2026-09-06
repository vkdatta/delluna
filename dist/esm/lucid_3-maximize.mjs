export const name="lucid_3-maximize";
export const id="dl_023095573a1e4eca8591";
export const url=new URL("../icons/lucid_3-maximize.svg?v=d884ba2e43e79c707ee0b9e111cfbbb73bed76162dc7b33f920125f6515dd5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
