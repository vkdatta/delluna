export const name="location_disabled-fill";
export const id="dl_8f0b82fec0ac4fa39575";
export const url=new URL("../icons/location_disabled-fill.svg?v=542013676b47eed11823c3335010c4bbe75307c4a52dc7586b45ea7ec524d0c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
