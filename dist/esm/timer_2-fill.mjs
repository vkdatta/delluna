export const name="timer_2-fill";
export const id="dl_6792933874d3dfa3d07c";
export const url=new URL("../icons/timer_2-fill.svg?v=0f22c6968ae0c17c5ba24f5cc0915ad8a08102426fe45074caf318b6aeaae4a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
