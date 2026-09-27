export const name="mobile_speaker-fill";
export const id="dl_086ddd35fa30f7144e92";
export const url=new URL("../icons/mobile_speaker-fill.svg?v=1d92b449da4393a5ece82e42b69ce6244ad36f19a58b6e2ed8e73bfe018b280c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
