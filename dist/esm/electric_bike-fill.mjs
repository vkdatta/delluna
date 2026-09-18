export const name="electric_bike-fill";
export const id="dl_5a95dedb9c174d8f82f2";
export const url=new URL("../icons/electric_bike-fill.svg?v=0107497ae577f987f360d57a983397f9e05472d9d5cb17799b71ffaaeee14c8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
