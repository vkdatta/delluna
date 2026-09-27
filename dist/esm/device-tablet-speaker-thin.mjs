export const name="device-tablet-speaker-thin";
export const id="dl_6ee5fbd29df14665b154";
export const url=new URL("../icons/device-tablet-speaker-thin.svg?v=4e00a51543da6cf3857904d52fe07d6bcd836ff1af67bc8871b27f3978068d61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
