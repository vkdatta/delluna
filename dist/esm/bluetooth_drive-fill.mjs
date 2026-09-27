export const name="bluetooth_drive-fill";
export const id="dl_f728281c93e38ed25432";
export const url=new URL("../icons/bluetooth_drive-fill.svg?v=4c6f077d5610650f42394339224d6400948e8454d12b778cf3c284c91cc1bba1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
