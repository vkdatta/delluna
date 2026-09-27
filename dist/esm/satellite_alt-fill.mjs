export const name="satellite_alt-fill";
export const id="dl_9a7672b8a7c772c45580";
export const url=new URL("../icons/satellite_alt-fill.svg?v=e320b26b204840fd0ff282b1d87831bfa1fa2c7f633fadb00bcecefe9bfdad68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
