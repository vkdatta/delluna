export const name="sound_sampler-fill";
export const id="dl_14214e519e59af12a496";
export const url=new URL("../icons/sound_sampler-fill.svg?v=40f09490cbd1a891c3afb59af79bb6da1b65461dc43f46c9b1d3b5739cb43791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
