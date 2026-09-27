export const name="map-pin-line-thin";
export const id="dl_e25644c25cd94b74ad4c";
export const url=new URL("../icons/map-pin-line-thin.svg?v=aeea70dbe2de50e72e43eaf4413d45280c8ecb41af38e2aa886d29b081c07953",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
