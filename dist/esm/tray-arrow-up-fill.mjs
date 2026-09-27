export const name="tray-arrow-up-fill";
export const id="dl_4a3abcdd8bee663032fb";
export const url=new URL("../icons/tray-arrow-up-fill.svg?v=4dc479453c49541ae3fd3b43c5519d618ea645bc626d5ac87431cebce2813d3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
