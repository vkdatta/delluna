export const name="film-strip-thin";
export const id="dl_be8a678baa1842dda711";
export const url=new URL("../icons/film-strip-thin.svg?v=e36e249e46232e6bf994c1f2fe68d5b68fa2f80e6e942e5fc47dcb0e1c6f2d75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
