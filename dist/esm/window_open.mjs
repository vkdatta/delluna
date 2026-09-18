export const name="window_open";
export const id="dl_6968706f9d3e4a889789";
export const url=new URL("../icons/window_open.svg?v=210498ece5a49335459c8dff62a95c45adb328238eb39a2545b170b9316c0feb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
