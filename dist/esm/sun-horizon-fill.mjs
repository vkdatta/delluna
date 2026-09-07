export const name="sun-horizon-fill";
export const id="dl_90fabe46561c45a88b01";
export const url=new URL("../icons/S/sun-horizon-fill.svg?v=cd5dc44308e68be0a9e13dc3f08ab84a7d020799599595c7d98c131432535d57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
