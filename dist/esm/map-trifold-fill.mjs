export const name="map-trifold-fill";
export const id="dl_65884bab01fa431ab371";
export const url=new URL("../icons/map-trifold-fill.svg?v=28b2fcce834b63d7f650849ed58bdd5e1e9b691326baf2a4e46ef04517016293",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
