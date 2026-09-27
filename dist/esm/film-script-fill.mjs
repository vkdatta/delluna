export const name="film-script-fill";
export const id="dl_7569b59a0ed3472c909b";
export const url=new URL("../icons/film-script-fill.svg?v=a67e7c4ddc8f9cb815ad5f62d428340f63d83c6b66ae715251e53ac855544832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
