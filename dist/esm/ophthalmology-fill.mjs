export const name="ophthalmology-fill";
export const id="dl_8b6774cbbf9c496b94e8";
export const url=new URL("../icons/ophthalmology-fill.svg?v=1fd882d89b65755a7fcc49523b87a825fdbf0ee9c6453552b0b51ad51baa4174",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
