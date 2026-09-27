export const name="lucid_1-ambulance";
export const id="dl_046589c0eecc413a9522";
export const url=new URL("../icons/lucid_1-ambulance.svg?v=c2e20257e53027912de383e9fbf7995511f5d8fe035c62fa38bfdf273cc664e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
