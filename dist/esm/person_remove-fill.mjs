export const name="person_remove-fill";
export const id="dl_952b48cece9bb205b77f";
export const url=new URL("../icons/person_remove-fill.svg?v=9e244c423824bfeb195d5a507167aadb496ecfa32e3f1b7331067ea477671e11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
