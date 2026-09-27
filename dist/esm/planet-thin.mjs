export const name="planet-thin";
export const id="dl_cafa5ed82c4c429987bf";
export const url=new URL("../icons/planet-thin.svg?v=6939d5486d2057699e13da9e1c5d8649177117b3184402810763d5b7e89741d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
