export const name="wifi-slash";
export const id="dl_b4a291a8bde269d46055";
export const url=new URL("../icons/wifi-slash.svg?v=046145ba120a35221d29ef2e919c8446ebe7bb3d47ed4a47156c8a9542cf9445",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
