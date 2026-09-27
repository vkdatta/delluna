export const name="format_align_right-fill";
export const id="dl_6bc1fd928cc73419d7d9";
export const url=new URL("../icons/format_align_right-fill.svg?v=3d957d1d812152c482a68afdb6b45ac282fa15c6ac19afa838f182d2cf11034c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
