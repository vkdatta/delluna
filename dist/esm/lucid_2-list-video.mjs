export const name="lucid_2-list-video";
export const id="dl_e4df14f46a404a97957e";
export const url=new URL("../icons/lucid_2-list-video.svg?v=bf095c49152301c352c28336b035cb29e0e95298af6025f39edd20fd3a0b80fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
