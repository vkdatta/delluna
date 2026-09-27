export const name="stylus_note-fill";
export const id="dl_9de338ea0cf1d06049df";
export const url=new URL("../icons/stylus_note-fill.svg?v=e522128d3156e277b0cd08862be2c440d3e1dcd298ec9a4f121fb0940ee14f31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
