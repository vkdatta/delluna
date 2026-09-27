export const name="device_band";
export const id="dl_8aa08bc99e597b4417ac";
export const url=new URL("../icons/device_band.svg?v=309d1db367b230ed974614ef8dff73fa388c91b246dead704d4de9108bc56ddb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
