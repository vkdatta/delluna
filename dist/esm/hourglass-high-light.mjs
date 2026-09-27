export const name="hourglass-high-light";
export const id="dl_c4d52a334868410b946e";
export const url=new URL("../icons/hourglass-high-light.svg?v=0a499146283f2966270894558d090bd5214fd729ad64256c153ffc3cc1566a8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
