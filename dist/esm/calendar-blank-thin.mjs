export const name="calendar-blank-thin";
export const id="dl_cbdd115466ca423d89a3";
export const url=new URL("../icons/calendar-blank-thin.svg?v=009208ff0498bd76067d60641712c56f79b2abaf20db50e08cdc6af4ab2375f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
