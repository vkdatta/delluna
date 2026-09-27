export const name="location_off";
export const id="dl_f542dd0197fc31468060";
export const url=new URL("../icons/location_off.svg?v=6410d7401d99a9da59085f8bea2bda6a929404b7633b130c52f5a7cdb0aa8cfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
