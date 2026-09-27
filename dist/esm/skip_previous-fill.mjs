export const name="skip_previous-fill";
export const id="dl_94901d07c1c44aa5f20e";
export const url=new URL("../icons/skip_previous-fill.svg?v=a841d358a94ffa27245e3416ca750dd7ff05cc9b48b6362a1a36c6b53e210dda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
