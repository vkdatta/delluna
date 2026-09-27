export const name="shelf_auto_hide";
export const id="dl_b08fd522135fedef66bf";
export const url=new URL("../icons/shelf_auto_hide.svg?v=a45bfcd0ac8365f5a9238c1fd78945e0c88c3a7fb60c265c30ae0be2d8664f2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
