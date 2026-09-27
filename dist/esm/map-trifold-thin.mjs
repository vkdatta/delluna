export const name="map-trifold-thin";
export const id="dl_946931f491804789875c";
export const url=new URL("../icons/map-trifold-thin.svg?v=aa5fb7ba88a8d348eba84264de9fdc4434f096ee2c4b0261c61cfa6dbe90c17d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
