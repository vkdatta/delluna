export const name="voice_selection-fill";
export const id="dl_8af592cc13b39d535970";
export const url=new URL("../icons/voice_selection-fill.svg?v=5737a5bfe4e88c3226758e51db799cc3911fe4a0e489261497dad411da60fc84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
