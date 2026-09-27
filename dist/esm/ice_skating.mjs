export const name="ice_skating";
export const id="dl_f5e80ec78571c75af3a1";
export const url=new URL("../icons/ice_skating.svg?v=23f5139b3261ad57352f925333904d4c76f2047f370e29b38e09a9733bfb43f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
