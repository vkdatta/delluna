export const name="movie_edit_off-fill";
export const id="dl_f7e64abd179adfedbe13";
export const url=new URL("../icons/movie_edit_off-fill.svg?v=d727e3763e1a8fda19880baed7816bcd95e38b89fb1b2444ddb9b8de843a4186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
