export const name="city-light";
export const id="dl_bfe80883bf0b4e158cef";
export const url=new URL("../icons/city-light.svg?v=8759c6c3e8354e966442959da08bf8d274b10033b5382300e396f9bdef3a20a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
