export const name="night_shelter-fill";
export const id="dl_73b7b365188035d28ee6";
export const url=new URL("../icons/night_shelter-fill.svg?v=1cedaf8fbe42072c359b8eb6dc2fb6c1d1766c251fdae087784e868f82199b3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
