export const name="sensors_off-fill";
export const id="dl_2801afad7ce9958aeecc";
export const url=new URL("../icons/sensors_off-fill.svg?v=d1dd0fa9304ca0eeceb35718c9e14c96fa40d8c0c1a9cf375e5edb3599c16af2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
