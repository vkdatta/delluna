export const name="play-circle-fill";
export const id="dl_c3a06485245f4cbb9aee";
export const url=new URL("../icons/play-circle-fill.svg?v=03c94db2110c104a9b7605bc44363fb81f47cd7da459f72d2475461154cc0d78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
