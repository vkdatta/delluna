export const name="monitor-play-fill";
export const id="dl_9127d837f51b4f5f9c31";
export const url=new URL("../icons/monitor-play-fill.svg?v=7e1d921ba28ba6123d0cd3945149a35ee04008dff6169e1a5ea6e3d751861336",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
