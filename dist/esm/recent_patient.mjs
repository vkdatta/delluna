export const name="recent_patient";
export const id="dl_6bdc8dbb07321480a25a";
export const url=new URL("../icons/recent_patient.svg?v=de8a9770fd1bae9276af0b624ed134c3c03e46b8839a55eed720c871f92a1e7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
