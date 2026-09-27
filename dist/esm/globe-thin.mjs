export const name="globe-thin";
export const id="dl_92fb137f893f41369dd2";
export const url=new URL("../icons/globe-thin.svg?v=ce3316a46ef923ef40414f141c82ab8387969bde0a10bef970fbd531f19965f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
