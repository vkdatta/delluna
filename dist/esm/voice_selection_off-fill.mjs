export const name="voice_selection_off-fill";
export const id="dl_67684315749f4f669bf9";
export const url=new URL("../icons/voice_selection_off-fill.svg?v=551fa05093cfab46b98a916cb59ec1ea0e89a5ec140de32797c545b3258d6701",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
