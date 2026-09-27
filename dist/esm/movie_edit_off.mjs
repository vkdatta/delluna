export const name="movie_edit_off";
export const id="dl_369429914441f35237aa";
export const url=new URL("../icons/movie_edit_off.svg?v=19dcf0fde548b76c8fe4ccb0d9b0fe1826edbcd52a9cbc2ddf7ddcca914efb94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
