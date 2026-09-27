export const name="arrow-circle-up-fill";
export const id="dl_45abab00081646289830";
export const url=new URL("../icons/arrow-circle-up-fill.svg?v=908d1141afe71bacdac679b91f586ce8ae2c433d3ae098b94ee518639240c132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
