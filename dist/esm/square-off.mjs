export const name="square-off";
export const id="dl_4384866b3a0242c1b6b4";
export const url=new URL("../icons/square-off.svg?v=4f73127939b10f4e5be6ebb76285acc119542a9a12988225cff5220e575b06a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
