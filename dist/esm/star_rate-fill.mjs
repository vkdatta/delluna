export const name="star_rate-fill";
export const id="dl_28a59f774fcaadd22941";
export const url=new URL("../icons/star_rate-fill.svg?v=adda1a6b7bcca8b85fb4f28fd6c4f8bb1394aedd65dc6b49c1efdbff1fd2065e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
