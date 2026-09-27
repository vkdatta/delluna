export const name="voice_selection_off-fill";
export const id="dl_c68304578bf0a85266c8";
export const url=new URL("../icons/voice_selection_off-fill.svg?v=0e843f74288739894426284f7b310675642848823313540a8b8f1075caba30b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
