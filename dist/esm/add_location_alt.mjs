export const name="add_location_alt";
export const id="dl_8b010a3d1d4e44b7b300";
export const url=new URL("../icons/add_location_alt.svg?v=a678c6930f74547622e7522864ead588379308305086532bf8b562a58e2ede0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
