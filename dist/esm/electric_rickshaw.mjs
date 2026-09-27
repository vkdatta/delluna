export const name="electric_rickshaw";
export const id="dl_886c484a5aefc35d1162";
export const url=new URL("../icons/electric_rickshaw.svg?v=1cc336dc8c2a6555bb7429042084b7cd09bd8f952dd9ace10ab91249906818fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
