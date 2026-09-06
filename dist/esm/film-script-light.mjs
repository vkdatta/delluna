export const name="film-script-light";
export const id="dl_3733eeee3d004960834c";
export const url=new URL("../icons/film-script-light.svg?v=bb06c8739816f85e51a34fe25a5abfe4327d30fcf258919dffcc124b8b2e05f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
