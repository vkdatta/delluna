export const name="lucid_3-rectangle-vertical";
export const id="dl_b2964954e7b04c09b372";
export const url=new URL("../icons/lucid_3-rectangle-vertical.svg?v=ca994edaca2ebce20a368dacb9ac31058eb1f0ff5ee90245f2abe5fe01b423b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
