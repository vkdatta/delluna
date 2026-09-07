export const name="tidal-logo-thin";
export const id="dl_cabc2b8080bb45c5884a";
export const url=new URL("../icons/T/tidal-logo-thin.svg?v=6febb409213e66066c718f537596128e51bf2ddd01190ae3a9b708b7c6e4c231",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
