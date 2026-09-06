export const name="device-tablet-speaker-thin";
export const id="dl_6ee5fbd29df14665b154";
export const url=new URL("../icons/device-tablet-speaker-thin.svg?v=b4ba91562195f78de47a72baa14aeeae8fcd64f3b551455e888f7b1ae07de5a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
