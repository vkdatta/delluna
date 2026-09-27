export const name="transition_fade-fill";
export const id="dl_25360ef86f8cd7da1ae2";
export const url=new URL("../icons/transition_fade-fill.svg?v=1c18cbfafc8b77e166b356136cd28534a56f3754f40fac49d6c25620a32ab7a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
