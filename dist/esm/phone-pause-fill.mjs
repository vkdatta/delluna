export const name="phone-pause-fill";
export const id="dl_a10f9d2738d64794b818";
export const url=new URL("../icons/phone-pause-fill.svg?v=5e3560320dafe0c562dfea320738fc33d4177310901fdb72a59c823387051da2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
