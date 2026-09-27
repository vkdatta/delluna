export const name="megaphone-thin";
export const id="dl_38d0f6ab76414155a24f";
export const url=new URL("../icons/megaphone-thin.svg?v=97fdaeaeb21d76b7f4211e9763a740d2d72931957ad4a76fc02ee6181a12b312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
