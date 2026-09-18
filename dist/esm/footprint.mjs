export const name="footprint";
export const id="dl_ae6573ac2321446cb685";
export const url=new URL("../icons/footprint.svg?v=d8ebd77c84803e21c8dc1d84e568cf5e1b7941fa991a99dbfda08acc7b9fc229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
