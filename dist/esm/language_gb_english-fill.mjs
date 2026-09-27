export const name="language_gb_english-fill";
export const id="dl_24570623b4802b6ed5a5";
export const url=new URL("../icons/language_gb_english-fill.svg?v=23bb58bc4a53b55c566fcb3c79ab6b1e16084cef864ef94d9c50ec9e5aed6fbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
