export const name="planet-thin";
export const id="dl_cafa5ed82c4c429987bf";
export const url=new URL("../icons/planet-thin.svg?v=5ff7fcd0ecc0362030c63763e750336129922b19f62e96fe61a9dfd46c8631d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
