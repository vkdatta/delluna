export const name="map";
export const id="dl_a65e11f9f465be22b244";
export const url=new URL("../icons/map.svg?v=1ed7400b9ace4876607a600be70988b8e6e0697a8a1e013737b95ddf23243884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
