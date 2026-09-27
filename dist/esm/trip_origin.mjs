export const name="trip_origin";
export const id="dl_0d72d11c982f1b260c63";
export const url=new URL("../icons/trip_origin.svg?v=6ea643551ecaa15287074ed1b43b83f515e5d4f7cc25f0dce06d46c5339d66a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
