export const name="play_pause-fill";
export const id="dl_d7fe8841e29253282c29";
export const url=new URL("../icons/play_pause-fill.svg?v=baf86233e6e9852b075f3507fbafbdf62e48500334edddaec5ba6fe93dc1abc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
