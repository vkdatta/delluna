export const name="movie_edit";
export const id="dl_87c37b2e05c0e476dc2b";
export const url=new URL("../icons/movie_edit.svg?v=4461e951eb0b0ae4a89366dc6150adb9a75ed0f27abe70d7a18f2be29fa8b139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
