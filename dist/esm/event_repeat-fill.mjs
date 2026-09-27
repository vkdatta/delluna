export const name="event_repeat-fill";
export const id="dl_3d38ec5dc3d4cf0837e4";
export const url=new URL("../icons/event_repeat-fill.svg?v=8840ac60c64c50f2fc8f12501145c0b80fa2830900f01e6152bacfa3ef832cf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
